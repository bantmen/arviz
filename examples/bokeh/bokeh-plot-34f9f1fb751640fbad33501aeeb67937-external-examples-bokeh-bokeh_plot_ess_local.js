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
      };var element = document.getElementById("4dd95aec-ac21-46a0-bcd3-4634e677862d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4dd95aec-ac21-46a0-bcd3-4634e677862d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a6fb5e16-0f5b-444f-a25f-7b107793655d":{"roots":{"references":[{"attributes":{"below":[{"id":"56736","type":"LinearAxis"}],"center":[{"id":"56740","type":"Grid"},{"id":"56745","type":"Grid"}],"left":[{"id":"56741","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56770","type":"GlyphRenderer"},{"id":"56774","type":"GlyphRenderer"},{"id":"56776","type":"Span"},{"id":"56777","type":"Span"}],"title":{"id":"56778","type":"Title"},"toolbar":{"id":"56756","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56728","type":"DataRange1d"},"x_scale":{"id":"56732","type":"LinearScale"},"y_range":{"id":"56730","type":"DataRange1d"},"y_scale":{"id":"56734","type":"LinearScale"}},"id":"56727","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"56728","type":"DataRange1d"},{"attributes":{"source":{"id":"56767","type":"ColumnDataSource"}},"id":"56771","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"56772","type":"Dash"},{"attributes":{"tools":[{"id":"56746","type":"PanTool"},{"id":"56747","type":"BoxZoomTool"},{"id":"56748","type":"WheelZoomTool"},{"id":"56749","type":"BoxSelectTool"},{"id":"56750","type":"LassoSelectTool"},{"id":"56751","type":"UndoTool"},{"id":"56752","type":"RedoTool"},{"id":"56753","type":"ResetTool"},{"id":"56754","type":"SaveTool"},{"id":"56755","type":"HoverTool"}]},"id":"56794","type":"ProxyToolbar"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"56782","type":"BasicTickFormatter"},"ticker":{"id":"56737","type":"BasicTicker"}},"id":"56736","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"56794","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"56795","type":"ToolbarBox"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"56784","type":"BasicTickFormatter"},"ticker":{"id":"56742","type":"BasicTicker"}},"id":"56741","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"56778","type":"Title"},{"attributes":{"ticker":{"id":"56737","type":"BasicTicker"}},"id":"56740","type":"Grid"},{"attributes":{"children":[{"id":"56795","type":"ToolbarBox"},{"id":"56793","type":"GridBox"}]},"id":"56796","type":"Column"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","shape":[2]}},"selected":{"id":"56788","type":"Selection"},"selection_policy":{"id":"56787","type":"UnionRenderers"}},"id":"56773","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56786","type":"Selection"},"selection_policy":{"id":"56785","type":"UnionRenderers"}},"id":"56767","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"56730","type":"DataRange1d"},{"attributes":{},"id":"56754","type":"SaveTool"},{"attributes":{},"id":"56748","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"56755","type":"HoverTool"},{"attributes":{},"id":"56788","type":"Selection"},{"attributes":{},"id":"56737","type":"BasicTicker"},{"attributes":{},"id":"56742","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56746","type":"PanTool"},{"id":"56747","type":"BoxZoomTool"},{"id":"56748","type":"WheelZoomTool"},{"id":"56749","type":"BoxSelectTool"},{"id":"56750","type":"LassoSelectTool"},{"id":"56751","type":"UndoTool"},{"id":"56752","type":"RedoTool"},{"id":"56753","type":"ResetTool"},{"id":"56754","type":"SaveTool"},{"id":"56755","type":"HoverTool"}]},"id":"56756","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56790","type":"BoxAnnotation"},{"attributes":{},"id":"56746","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56791","type":"PolyAnnotation"},{"attributes":{},"id":"56784","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"56773","type":"ColumnDataSource"}},"id":"56775","type":"CDSView"},{"attributes":{"data_source":{"id":"56773","type":"ColumnDataSource"},"glyph":{"id":"56772","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"56775","type":"CDSView"}},"id":"56774","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"56727","subtype":"Figure","type":"Plot"},0,0]]},"id":"56793","type":"GridBox"},{"attributes":{},"id":"56752","type":"RedoTool"},{"attributes":{},"id":"56753","type":"ResetTool"},{"attributes":{},"id":"56732","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"56790","type":"BoxAnnotation"}},"id":"56749","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56789","type":"BoxAnnotation"},{"attributes":{},"id":"56785","type":"UnionRenderers"},{"attributes":{},"id":"56786","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56769","type":"Circle"},{"attributes":{"overlay":{"id":"56789","type":"BoxAnnotation"}},"id":"56747","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"56776","type":"Span"},{"attributes":{},"id":"56751","type":"UndoTool"},{"attributes":{"data_source":{"id":"56767","type":"ColumnDataSource"},"glyph":{"id":"56768","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56769","type":"Circle"},"selection_glyph":null,"view":{"id":"56771","type":"CDSView"}},"id":"56770","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56768","type":"Circle"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"56777","type":"Span"},{"attributes":{"dimension":1,"ticker":{"id":"56742","type":"BasicTicker"}},"id":"56745","type":"Grid"},{"attributes":{},"id":"56734","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"56791","type":"PolyAnnotation"}},"id":"56750","type":"LassoSelectTool"},{"attributes":{},"id":"56787","type":"UnionRenderers"},{"attributes":{},"id":"56782","type":"BasicTickFormatter"}],"root_ids":["56796"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"a6fb5e16-0f5b-444f-a25f-7b107793655d","roots":{"56796":"4dd95aec-ac21-46a0-bcd3-4634e677862d"}}];
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