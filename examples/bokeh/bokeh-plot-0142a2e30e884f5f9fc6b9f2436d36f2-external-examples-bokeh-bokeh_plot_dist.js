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
      };var element = document.getElementById("bf91a703-6c13-46ee-97ed-d74a7b094437");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bf91a703-6c13-46ee-97ed-d74a7b094437' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"12492c52-8b61-46c5-9527-fd75d3545822":{"roots":{"references":[{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"56199","type":"Quad"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56185","type":"PanTool"},{"id":"56186","type":"WheelZoomTool"},{"id":"56187","type":"BoxZoomTool"},{"id":"56188","type":"SaveTool"},{"id":"56189","type":"ResetTool"},{"id":"56190","type":"HelpTool"}]},"id":"56191","type":"Toolbar"},{"attributes":{"callback":null},"id":"56167","type":"DataRange1d"},{"attributes":{"formatter":{"id":"56206","type":"BasicTickFormatter"},"ticker":{"id":"56144","type":"BasicTicker"}},"id":"56143","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"eekmMQisjD/sUbgeheuxP28Sg8DKocU/7nw/NV66yT9WDi2yne/HPzvfT42XbsI/okW28/3UuD8pXI/C9SisP+xRuB6F66E/nMQgsHJokT/6fmq8dJN4P/yp8dJNYnA//Knx0k1iUD8=","dtype":"float64","shape":[13]}},"selected":{"id":"56231","type":"Selection"},"selection_policy":{"id":"56230","type":"UnionRenderers"}},"id":"56198","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"56234","type":"Selection"},"selection_policy":{"id":"56233","type":"UnionRenderers"}},"id":"56212","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"56227","type":"BasicTickFormatter"},"ticker":{"id":"56176","type":"BasicTicker"}},"id":"56175","type":"LinearAxis"},{"attributes":{},"id":"56206","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"56209","type":"BoxAnnotation"}},"id":"56155","type":"BoxZoomTool"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"56201","type":"GlyphRenderer"}]},"id":"56211","type":"LegendItem"},{"attributes":{},"id":"56185","type":"PanTool"},{"attributes":{},"id":"56156","type":"SaveTool"},{"attributes":{},"id":"56227","type":"BasicTickFormatter"},{"attributes":{},"id":"56189","type":"ResetTool"},{"attributes":{},"id":"56181","type":"BasicTicker"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"56213","type":"Line"},{"attributes":{},"id":"56173","type":"LinearScale"},{"attributes":{},"id":"56233","type":"UnionRenderers"},{"attributes":{},"id":"56154","type":"WheelZoomTool"},{"attributes":{},"id":"56188","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56214","type":"Line"},{"attributes":{"source":{"id":"56212","type":"ColumnDataSource"}},"id":"56216","type":"CDSView"},{"attributes":{},"id":"56190","type":"HelpTool"},{"attributes":{"formatter":{"id":"56229","type":"BasicTickFormatter"},"ticker":{"id":"56181","type":"BasicTicker"}},"id":"56180","type":"LinearAxis"},{"attributes":{},"id":"56234","type":"Selection"},{"attributes":{},"id":"56139","type":"LinearScale"},{"attributes":{"data_source":{"id":"56198","type":"ColumnDataSource"},"glyph":{"id":"56199","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56200","type":"Quad"},"selection_glyph":null,"view":{"id":"56202","type":"CDSView"}},"id":"56201","type":"GlyphRenderer"},{"attributes":{},"id":"56231","type":"Selection"},{"attributes":{},"id":"56186","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"56135","type":"DataRange1d"},{"attributes":{},"id":"56176","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56209","type":"BoxAnnotation"},{"attributes":{},"id":"56157","type":"ResetTool"},{"attributes":{"overlay":{"id":"56235","type":"BoxAnnotation"}},"id":"56187","type":"BoxZoomTool"},{"attributes":{"items":[{"id":"56211","type":"LegendItem"}]},"id":"56210","type":"Legend"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"56200","type":"Quad"},{"attributes":{},"id":"56141","type":"LinearScale"},{"attributes":{"ticker":{"id":"56144","type":"BasicTicker"}},"id":"56147","type":"Grid"},{"attributes":{"source":{"id":"56198","type":"ColumnDataSource"}},"id":"56202","type":"CDSView"},{"attributes":{},"id":"56208","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56235","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56153","type":"PanTool"},{"id":"56154","type":"WheelZoomTool"},{"id":"56155","type":"BoxZoomTool"},{"id":"56156","type":"SaveTool"},{"id":"56157","type":"ResetTool"},{"id":"56158","type":"HelpTool"}]},"id":"56159","type":"Toolbar"},{"attributes":{"callback":null},"id":"56137","type":"DataRange1d"},{"attributes":{"data_source":{"id":"56212","type":"ColumnDataSource"},"glyph":{"id":"56213","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56214","type":"Line"},"selection_glyph":null,"view":{"id":"56216","type":"CDSView"}},"id":"56215","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"56175","type":"LinearAxis"}],"center":[{"id":"56179","type":"Grid"},{"id":"56184","type":"Grid"}],"left":[{"id":"56180","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"56215","type":"GlyphRenderer"}],"title":{"id":"56220","type":"Title"},"toolbar":{"id":"56191","type":"Toolbar"},"x_range":{"id":"56167","type":"DataRange1d"},"x_scale":{"id":"56171","type":"LinearScale"},"y_range":{"id":"56169","type":"DataRange1d"},"y_scale":{"id":"56173","type":"LinearScale"}},"id":"56166","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56158","type":"HelpTool"},{"attributes":{},"id":"56171","type":"LinearScale"},{"attributes":{},"id":"56153","type":"PanTool"},{"attributes":{},"id":"56149","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"56181","type":"BasicTicker"}},"id":"56184","type":"Grid"},{"attributes":{"below":[{"id":"56143","type":"LinearAxis"}],"center":[{"id":"56147","type":"Grid"},{"id":"56152","type":"Grid"},{"id":"56210","type":"Legend"}],"left":[{"id":"56148","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"56201","type":"GlyphRenderer"}],"title":{"id":"56203","type":"Title"},"toolbar":{"id":"56159","type":"Toolbar"},"x_range":{"id":"56135","type":"DataRange1d"},"x_scale":{"id":"56139","type":"LinearScale"},"y_range":{"id":"56137","type":"DataRange1d"},"y_scale":{"id":"56141","type":"LinearScale"}},"id":"56134","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"56176","type":"BasicTicker"}},"id":"56179","type":"Grid"},{"attributes":{},"id":"56230","type":"UnionRenderers"},{"attributes":{"text":""},"id":"56220","type":"Title"},{"attributes":{},"id":"56144","type":"BasicTicker"},{"attributes":{},"id":"56229","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"56208","type":"BasicTickFormatter"},"ticker":{"id":"56149","type":"BasicTicker"}},"id":"56148","type":"LinearAxis"},{"attributes":{"children":[{"id":"56134","subtype":"Figure","type":"Plot"},{"id":"56166","subtype":"Figure","type":"Plot"}]},"id":"56217","type":"Row"},{"attributes":{"callback":null},"id":"56169","type":"DataRange1d"},{"attributes":{"text":""},"id":"56203","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"56149","type":"BasicTicker"}},"id":"56152","type":"Grid"}],"root_ids":["56217"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"12492c52-8b61-46c5-9527-fd75d3545822","roots":{"56217":"bf91a703-6c13-46ee-97ed-d74a7b094437"}}];
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