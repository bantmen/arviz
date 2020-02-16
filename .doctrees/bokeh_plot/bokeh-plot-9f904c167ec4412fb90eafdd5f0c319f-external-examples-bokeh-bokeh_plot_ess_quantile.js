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
      };var element = document.getElementById("86fdee55-5e8b-4176-bd21-8e08aa45f1e2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '86fdee55-5e8b-4176-bd21-8e08aa45f1e2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"09a2c36b-664d-4602-854a-da3397b3be9c":{"roots":{"references":[{"attributes":{},"id":"56883","type":"RedoTool"},{"attributes":{},"id":"56885","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"56873","type":"BasicTicker"}},"id":"56876","type":"Grid"},{"attributes":{},"id":"56884","type":"ResetTool"},{"attributes":{},"id":"56877","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56914","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"56898","type":"ColumnDataSource"},"glyph":{"id":"56899","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56900","type":"Circle"},"selection_glyph":null,"view":{"id":"56902","type":"CDSView"}},"id":"56901","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"56858","subtype":"Figure","type":"Plot"},0,0]]},"id":"56917","type":"GridBox"},{"attributes":{},"id":"56873","type":"BasicTicker"},{"attributes":{"tools":[{"id":"56877","type":"PanTool"},{"id":"56878","type":"BoxZoomTool"},{"id":"56879","type":"WheelZoomTool"},{"id":"56880","type":"BoxSelectTool"},{"id":"56881","type":"LassoSelectTool"},{"id":"56882","type":"UndoTool"},{"id":"56883","type":"RedoTool"},{"id":"56884","type":"ResetTool"},{"id":"56885","type":"SaveTool"},{"id":"56886","type":"HoverTool"}]},"id":"56918","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"56913","type":"BoxAnnotation"}},"id":"56878","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"56918","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"56919","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56915","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"AmD6jcFOjEBQTl2raYiTQBDjz+4U2pNAZGseedHplEB/WvEazoSWQOHtizqLkJlAAkPUheO2mUBesx6n5kCZQLJxAzcYzZhAMUpMiFv0mUC/Oi/BFYGZQN5lChPFDZZAFw600+IXlUB7koIfjHaVQLrzDUmEzZRA0nSsVmc2lUBXi/wUTAaRQBZhtQ+zqpBAXkjEt6PHjECNgYxaPa6QQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56912","type":"Selection"},"selection_policy":{"id":"56911","type":"UnionRenderers"}},"id":"56898","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"56908","type":"BasicTickFormatter"},"ticker":{"id":"56868","type":"BasicTicker"}},"id":"56867","type":"LinearAxis"},{"attributes":{},"id":"56908","type":"BasicTickFormatter"},{"attributes":{},"id":"56911","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"56859","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56877","type":"PanTool"},{"id":"56878","type":"BoxZoomTool"},{"id":"56879","type":"WheelZoomTool"},{"id":"56880","type":"BoxSelectTool"},{"id":"56881","type":"LassoSelectTool"},{"id":"56882","type":"UndoTool"},{"id":"56883","type":"RedoTool"},{"id":"56884","type":"ResetTool"},{"id":"56885","type":"SaveTool"},{"id":"56886","type":"HoverTool"}]},"id":"56887","type":"Toolbar"},{"attributes":{},"id":"56879","type":"WheelZoomTool"},{"attributes":{},"id":"56868","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"56914","type":"BoxAnnotation"}},"id":"56880","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"56886","type":"HoverTool"},{"attributes":{},"id":"56912","type":"Selection"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"56903","type":"Span"},{"attributes":{},"id":"56910","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"56898","type":"ColumnDataSource"}},"id":"56902","type":"CDSView"},{"attributes":{"text":"sigma_y"},"id":"56904","type":"Title"},{"attributes":{"ticker":{"id":"56868","type":"BasicTicker"}},"id":"56871","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56899","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56900","type":"Circle"},{"attributes":{"children":[{"id":"56919","type":"ToolbarBox"},{"id":"56917","type":"GridBox"}]},"id":"56920","type":"Column"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"56910","type":"BasicTickFormatter"},"ticker":{"id":"56873","type":"BasicTicker"}},"id":"56872","type":"LinearAxis"},{"attributes":{},"id":"56865","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56913","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"56861","type":"DataRange1d"},{"attributes":{"below":[{"id":"56867","type":"LinearAxis"}],"center":[{"id":"56871","type":"Grid"},{"id":"56876","type":"Grid"}],"left":[{"id":"56872","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56901","type":"GlyphRenderer"},{"id":"56903","type":"Span"}],"title":{"id":"56904","type":"Title"},"toolbar":{"id":"56887","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56859","type":"DataRange1d"},"x_scale":{"id":"56863","type":"LinearScale"},"y_range":{"id":"56861","type":"DataRange1d"},"y_scale":{"id":"56865","type":"LinearScale"}},"id":"56858","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"56915","type":"PolyAnnotation"}},"id":"56881","type":"LassoSelectTool"},{"attributes":{},"id":"56882","type":"UndoTool"},{"attributes":{},"id":"56863","type":"LinearScale"}],"root_ids":["56920"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"09a2c36b-664d-4602-854a-da3397b3be9c","roots":{"56920":"86fdee55-5e8b-4176-bd21-8e08aa45f1e2"}}];
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