"""Bokeh Parallel coordinates plot."""
import bokeh.plotting as bkp
import numpy as np
from bokeh.models import DataRange1d
from bokeh.models.tickers import FixedTicker

from . import backend_kwarg_defaults, backend_show


def plot_parallel(
    ax, diverging_mask, _posterior, var_names, figsize, backend_config, backend_kwargs, show
):
    """Bokeh parallel plot."""
    if backend_config is None:
        backend_config = {}

    backend_config = {
        **backend_kwarg_defaults(
            ("bounds_x_range", "plot.bokeh.bounds_x_range"),
            ("bounds_y_range", "plot.bokeh.bounds_y_range"),
        ),
        **backend_config,
    }

    if backend_kwargs is None:
        backend_kwargs = {}

    backend_kwargs = {
        **backend_kwarg_defaults(
            ("tools", "plot.bokeh.tools"),
            ("output_backend", "plot.bokeh.output_backend"),
            ("dpi", "plot.bokeh.figure.dpi"),
        ),
        **backend_kwargs,
    }
    dpi = backend_kwargs.pop("dpi")
    if ax is None:
        ax = bkp.figure(
            width=int(figsize[0] * dpi),
            height=int(figsize[1] * dpi),
            toolbar_location="above",
            **backend_kwargs
        )

    non_div = list(_posterior[:, ~diverging_mask].T)
    x_non_div = [list(range(len(non_div[0]))) for _ in range(len(non_div))]

    ax.multi_line(
        x_non_div, non_div, line_color="black", line_alpha=0.05,
    )

    if np.any(diverging_mask):
        div = list(_posterior[:, diverging_mask].T)
        x_non_div = [list(range(len(div[0]))) for _ in range(len(div))]
        ax.multi_line(x_non_div, div, color="lime", line_width=1, line_alpha=0.5)

    ax.xaxis.ticker = FixedTicker(ticks=list(range(len(var_names))))
    ax.xaxis.major_label_overrides = dict(zip(map(str, range(len(var_names))), map(str, var_names)))
    ax.xaxis.major_label_orientation = np.pi / 2

    ax.x_range = DataRange1d(bounds=backend_config["bounds_x_range"], min_interval=2)
    ax.y_range = DataRange1d(bounds=backend_config["bounds_y_range"], min_interval=5)

    if backend_show(show):
        bkp.show(ax)

    return ax
