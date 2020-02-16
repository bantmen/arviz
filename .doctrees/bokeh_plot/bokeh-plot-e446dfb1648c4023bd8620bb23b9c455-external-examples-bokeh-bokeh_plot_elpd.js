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
      };var element = document.getElementById("07331247-2466-4636-a9de-79a06b322d7f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '07331247-2466-4636-a9de-79a06b322d7f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6d31dc14-6be2-40e2-8800-4f0211ca7e70":{"roots":{"references":[{"attributes":{},"id":"56357","type":"BasicTickFormatter"},{"attributes":{},"id":"56330","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"56310","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"56324","type":"BasicTicker"}},"id":"56327","type":"Grid"},{"attributes":{},"id":"56361","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"56363","type":"BoxAnnotation"}},"id":"56331","type":"BoxSelectTool"},{"attributes":{},"id":"56324","type":"BasicTicker"},{"attributes":{"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"56349","type":"Cross"},{"attributes":{"source":{"id":"56350","type":"ColumnDataSource"}},"id":"56352","type":"CDSView"},{"attributes":{"below":[{"id":"56318","type":"LinearAxis"}],"center":[{"id":"56322","type":"Grid"},{"id":"56327","type":"Grid"}],"left":[{"id":"56323","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56351","type":"GlyphRenderer"}],"title":{"id":"56353","type":"Title"},"toolbar":{"id":"56338","type":"Toolbar"},"x_range":{"id":"56310","type":"DataRange1d"},"x_scale":{"id":"56314","type":"LinearScale"},"y_range":{"id":"56312","type":"DataRange1d"},"y_scale":{"id":"56316","type":"LinearScale"}},"id":"56309","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56333","type":"UndoTool"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","shape":[8]}},"selected":{"id":"56361","type":"Selection"},"selection_policy":{"id":"56360","type":"UnionRenderers"}},"id":"56350","type":"ColumnDataSource"},{"attributes":{},"id":"56334","type":"RedoTool"},{"attributes":{"ticker":{"id":"56319","type":"BasicTicker"}},"id":"56322","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56328","type":"PanTool"},{"id":"56329","type":"BoxZoomTool"},{"id":"56330","type":"WheelZoomTool"},{"id":"56331","type":"BoxSelectTool"},{"id":"56332","type":"LassoSelectTool"},{"id":"56333","type":"UndoTool"},{"id":"56334","type":"RedoTool"},{"id":"56335","type":"ResetTool"},{"id":"56336","type":"SaveTool"},{"id":"56337","type":"HoverTool"}]},"id":"56338","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56364","type":"PolyAnnotation"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"56359","type":"BasicTickFormatter"},"ticker":{"id":"56324","type":"BasicTicker"}},"id":"56323","type":"LinearAxis"},{"attributes":{},"id":"56360","type":"UnionRenderers"},{"attributes":{},"id":"56335","type":"ResetTool"},{"attributes":{},"id":"56319","type":"BasicTicker"},{"attributes":{"callback":null},"id":"56312","type":"DataRange1d"},{"attributes":{"overlay":{"id":"56362","type":"BoxAnnotation"}},"id":"56329","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"56337","type":"HoverTool"},{"attributes":{},"id":"56328","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56363","type":"BoxAnnotation"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"56353","type":"Title"},{"attributes":{},"id":"56316","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56362","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"56357","type":"BasicTickFormatter"},"ticker":{"id":"56319","type":"BasicTicker"}},"id":"56318","type":"LinearAxis"},{"attributes":{"data_source":{"id":"56350","type":"ColumnDataSource"},"glyph":{"id":"56349","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"56352","type":"CDSView"}},"id":"56351","type":"GlyphRenderer"},{"attributes":{},"id":"56314","type":"LinearScale"},{"attributes":{},"id":"56359","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"56364","type":"PolyAnnotation"}},"id":"56332","type":"LassoSelectTool"},{"attributes":{},"id":"56336","type":"SaveTool"}],"root_ids":["56309"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"6d31dc14-6be2-40e2-8800-4f0211ca7e70","roots":{"56309":"07331247-2466-4636-a9de-79a06b322d7f"}}];
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