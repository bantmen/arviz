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
      };var element = document.getElementById("c8024e49-25f0-44a2-8391-4a35570b2033");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c8024e49-25f0-44a2-8391-4a35570b2033' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4d6096d2-1c89-4053-bdc9-326a9440aff7":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"80148","type":"BoxAnnotation"}},"id":"80116","type":"BoxSelectTool"},{"attributes":{"dimension":1,"ticker":{"id":"80109","type":"BasicTicker"}},"id":"80112","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"80149","type":"PolyAnnotation"}},"id":"80117","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80148","type":"BoxAnnotation"},{"attributes":{},"id":"80118","type":"UndoTool"},{"attributes":{},"id":"80119","type":"RedoTool"},{"attributes":{},"id":"80120","type":"ResetTool"},{"attributes":{},"id":"80121","type":"SaveTool"},{"attributes":{"below":[{"id":"80103","type":"LinearAxis"}],"center":[{"id":"80107","type":"Grid"},{"id":"80112","type":"Grid"}],"left":[{"id":"80108","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"80136","type":"GlyphRenderer"}],"title":{"id":"80138","type":"Title"},"toolbar":{"id":"80123","type":"Toolbar"},"x_range":{"id":"80095","type":"DataRange1d"},"x_scale":{"id":"80099","type":"LinearScale"},"y_range":{"id":"80097","type":"DataRange1d"},"y_scale":{"id":"80101","type":"LinearScale"}},"id":"80094","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"80099","type":"LinearScale"},{"attributes":{"callback":null},"id":"80122","type":"HoverTool"},{"attributes":{"text":"centered model - non centered model"},"id":"80138","type":"Title"},{"attributes":{},"id":"80142","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"80149","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"80113","type":"PanTool"},{"id":"80114","type":"BoxZoomTool"},{"id":"80115","type":"WheelZoomTool"},{"id":"80116","type":"BoxSelectTool"},{"id":"80117","type":"LassoSelectTool"},{"id":"80118","type":"UndoTool"},{"id":"80119","type":"RedoTool"},{"id":"80120","type":"ResetTool"},{"id":"80121","type":"SaveTool"},{"id":"80122","type":"HoverTool"}]},"id":"80123","type":"Toolbar"},{"attributes":{},"id":"80144","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"80142","type":"BasicTickFormatter"},"ticker":{"id":"80104","type":"BasicTicker"}},"id":"80103","type":"LinearAxis"},{"attributes":{"callback":null},"id":"80095","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","shape":[8]}},"selected":{"id":"80146","type":"Selection"},"selection_policy":{"id":"80145","type":"UnionRenderers"}},"id":"80135","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"80097","type":"DataRange1d"},{"attributes":{"data_source":{"id":"80135","type":"ColumnDataSource"},"glyph":{"id":"80134","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"80137","type":"CDSView"}},"id":"80136","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"80147","type":"BoxAnnotation"}},"id":"80114","type":"BoxZoomTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"80144","type":"BasicTickFormatter"},"ticker":{"id":"80109","type":"BasicTicker"}},"id":"80108","type":"LinearAxis"},{"attributes":{},"id":"80109","type":"BasicTicker"},{"attributes":{"ticker":{"id":"80104","type":"BasicTicker"}},"id":"80107","type":"Grid"},{"attributes":{"source":{"id":"80135","type":"ColumnDataSource"}},"id":"80137","type":"CDSView"},{"attributes":{},"id":"80101","type":"LinearScale"},{"attributes":{},"id":"80115","type":"WheelZoomTool"},{"attributes":{},"id":"80104","type":"BasicTicker"},{"attributes":{"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"80134","type":"Cross"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80147","type":"BoxAnnotation"},{"attributes":{},"id":"80113","type":"PanTool"},{"attributes":{},"id":"80145","type":"UnionRenderers"},{"attributes":{},"id":"80146","type":"Selection"}],"root_ids":["80094"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"4d6096d2-1c89-4053-bdc9-326a9440aff7","roots":{"80094":"c8024e49-25f0-44a2-8391-4a35570b2033"}}];
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