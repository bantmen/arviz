(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("41b24d54-c3b7-480c-85f2-b572e281f79e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '41b24d54-c3b7-480c-85f2-b572e281f79e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"4d0799e8-c04b-4cc0-8c59-4897d4b2f8ac":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53866","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53846","type":"Triangle"},{"attributes":{},"id":"53828","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53851","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53861","type":"MultiLine"},{"attributes":{"callback":null,"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"53884","type":"Selection"},"selection_policy":{"id":"53883","type":"UnionRenderers"}},"id":"53864","type":"ColumnDataSource"},{"attributes":{},"id":"53882","type":"Selection"},{"attributes":{"source":{"id":"53864","type":"ColumnDataSource"}},"id":"53868","type":"CDSView"},{"attributes":{},"id":"53881","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"53880","type":"Selection"},"selection_policy":{"id":"53879","type":"UnionRenderers"}},"id":"53854","type":"ColumnDataSource"},{"attributes":{},"id":"53884","type":"Selection"},{"attributes":{"source":{"id":"53844","type":"ColumnDataSource"}},"id":"53848","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53886","type":"BoxAnnotation"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":-30.687290318389813},"id":"53869","type":"Span"},{"attributes":{"callback":null,"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"53878","type":"Selection"},"selection_policy":{"id":"53877","type":"UnionRenderers"}},"id":"53849","type":"ColumnDataSource"},{"attributes":{"source":{"id":"53849","type":"ColumnDataSource"}},"id":"53853","type":"CDSView"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53845","type":"Triangle"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53865","type":"Circle"},{"attributes":{},"id":"53879","type":"UnionRenderers"},{"attributes":{},"id":"53876","type":"Selection"},{"attributes":{},"id":"53877","type":"UnionRenderers"},{"attributes":{"below":[{"id":"53811","type":"LinearAxis"}],"center":[{"id":"53815","type":"Grid"},{"id":"53820","type":"Grid"}],"left":[{"id":"53816","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"53847","type":"GlyphRenderer"},{"id":"53852","type":"GlyphRenderer"},{"id":"53857","type":"GlyphRenderer"},{"id":"53862","type":"GlyphRenderer"},{"id":"53867","type":"GlyphRenderer"},{"id":"53869","type":"Span"}],"title":{"id":"53870","type":"Title"},"toolbar":{"id":"53831","type":"Toolbar"},"x_range":{"id":"53803","type":"DataRange1d"},"x_scale":{"id":"53807","type":"LinearScale"},"y_range":{"id":"53805","type":"DataRange1d"},"y_scale":{"id":"53809","type":"LinearScale"}},"id":"53802","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"53864","type":"ColumnDataSource"},"glyph":{"id":"53865","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53866","type":"Circle"},"selection_glyph":null,"view":{"id":"53868","type":"CDSView"}},"id":"53867","type":"GlyphRenderer"},{"attributes":{},"id":"53883","type":"UnionRenderers"},{"attributes":{"axis_label":"Log","formatter":{"id":"53873","type":"BasicTickFormatter"},"ticker":{"id":"53812","type":"BasicTicker"}},"id":"53811","type":"LinearAxis"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53860","type":"MultiLine"},{"attributes":{},"id":"53878","type":"Selection"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"53805","type":"DataRange1d"},{"attributes":{"formatter":{"id":"53874","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"53842","type":"FixedTicker"}},"id":"53816","type":"LinearAxis"},{"attributes":{},"id":"53807","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53855","type":"Circle"},{"attributes":{},"id":"53875","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"53830","type":"HoverTool"},{"attributes":{"data_source":{"id":"53844","type":"ColumnDataSource"},"glyph":{"id":"53845","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53846","type":"Triangle"},"selection_glyph":null,"view":{"id":"53848","type":"CDSView"}},"id":"53847","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"xs":[[-32.02291312387836,-29.351667512901262],[-32.08705671645299,-29.533691636747104]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"53882","type":"Selection"},"selection_policy":{"id":"53881","type":"UnionRenderers"}},"id":"53859","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"53870","type":"Title"},{"attributes":{"data_source":{"id":"53859","type":"ColumnDataSource"},"glyph":{"id":"53860","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53861","type":"MultiLine"},"selection_glyph":null,"view":{"id":"53863","type":"CDSView"}},"id":"53862","type":"GlyphRenderer"},{"attributes":{},"id":"53873","type":"BasicTickFormatter"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"53842","type":"FixedTicker"},{"attributes":{},"id":"53826","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"53887","type":"PolyAnnotation"},{"attributes":{"source":{"id":"53859","type":"ColumnDataSource"}},"id":"53863","type":"CDSView"},{"attributes":{},"id":"53827","type":"RedoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53856","type":"Circle"},{"attributes":{"overlay":{"id":"53885","type":"BoxAnnotation"}},"id":"53822","type":"BoxZoomTool"},{"attributes":{"source":{"id":"53854","type":"ColumnDataSource"}},"id":"53858","type":"CDSView"},{"attributes":{"data_source":{"id":"53854","type":"ColumnDataSource"},"glyph":{"id":"53855","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53856","type":"Circle"},"selection_glyph":null,"view":{"id":"53858","type":"CDSView"}},"id":"53857","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"53849","type":"ColumnDataSource"},"glyph":{"id":"53850","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53851","type":"MultiLine"},"selection_glyph":null,"view":{"id":"53853","type":"CDSView"}},"id":"53852","type":"GlyphRenderer"},{"attributes":{},"id":"53812","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"53876","type":"Selection"},"selection_policy":{"id":"53875","type":"UnionRenderers"}},"id":"53844","type":"ColumnDataSource"},{"attributes":{},"id":"53809","type":"LinearScale"},{"attributes":{},"id":"53880","type":"Selection"},{"attributes":{},"id":"53829","type":"SaveTool"},{"attributes":{},"id":"53874","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53850","type":"MultiLine"},{"attributes":{"callback":null},"id":"53803","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"53821","type":"PanTool"},{"id":"53822","type":"BoxZoomTool"},{"id":"53823","type":"WheelZoomTool"},{"id":"53824","type":"BoxSelectTool"},{"id":"53825","type":"LassoSelectTool"},{"id":"53826","type":"UndoTool"},{"id":"53827","type":"RedoTool"},{"id":"53828","type":"ResetTool"},{"id":"53829","type":"SaveTool"},{"id":"53830","type":"HoverTool"}]},"id":"53831","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"53817","type":"BasicTicker"}},"id":"53820","type":"Grid"},{"attributes":{},"id":"53821","type":"PanTool"},{"attributes":{},"id":"53817","type":"BasicTicker"},{"attributes":{"ticker":{"id":"53812","type":"BasicTicker"}},"id":"53815","type":"Grid"},{"attributes":{},"id":"53823","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"53887","type":"PolyAnnotation"}},"id":"53825","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53885","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"53886","type":"BoxAnnotation"}},"id":"53824","type":"BoxSelectTool"}],"root_ids":["53802"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"4d0799e8-c04b-4cc0-8c59-4897d4b2f8ac","roots":{"53802":"41b24d54-c3b7-480c-85f2-b572e281f79e"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();