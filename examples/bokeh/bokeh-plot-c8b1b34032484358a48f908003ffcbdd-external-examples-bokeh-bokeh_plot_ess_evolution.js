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
      };var element = document.getElementById("a89ba219-df87-4e1e-95df-8050a9089f55");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a89ba219-df87-4e1e-95df-8050a9089f55' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4951d72e-d0ff-49f1-8c34-e7667710dfb8":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56637","type":"Selection"},"selection_policy":{"id":"56636","type":"UnionRenderers"}},"id":"56614","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"56609","type":"ColumnDataSource"},"glyph":{"id":"56610","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56611","type":"Line"},"selection_glyph":null,"view":{"id":"56613","type":"CDSView"}},"id":"56612","type":"GlyphRenderer"},{"attributes":{},"id":"56635","type":"Selection"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"56610","type":"Line"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"56619","type":"Span"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56606","type":"Line"},{"attributes":{"toolbar":{"id":"56643","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"56644","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56616","type":"Circle"},{"attributes":{"source":{"id":"56604","type":"ColumnDataSource"}},"id":"56608","type":"CDSView"},{"attributes":{},"id":"56631","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56635","type":"Selection"},"selection_policy":{"id":"56634","type":"UnionRenderers"}},"id":"56609","type":"ColumnDataSource"},{"attributes":{},"id":"56578","type":"PanTool"},{"attributes":{"callback":null},"id":"56562","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56638","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56611","type":"Line"},{"attributes":{"dimension":1,"ticker":{"id":"56574","type":"BasicTicker"}},"id":"56577","type":"Grid"},{"attributes":{},"id":"56636","type":"UnionRenderers"},{"attributes":{"source":{"id":"56609","type":"ColumnDataSource"}},"id":"56613","type":"CDSView"},{"attributes":{},"id":"56627","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"56599","type":"ColumnDataSource"},"glyph":{"id":"56600","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56601","type":"Circle"},"selection_glyph":null,"view":{"id":"56603","type":"CDSView"}},"id":"56602","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56600","type":"Circle"},{"attributes":{},"id":"56629","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"56639","type":"BoxAnnotation"}},"id":"56581","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56615","type":"Circle"},{"attributes":{"callback":null},"id":"56560","type":"DataRange1d"},{"attributes":{},"id":"56630","type":"UnionRenderers"},{"attributes":{},"id":"56586","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56640","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"56640","type":"PolyAnnotation"}},"id":"56582","type":"LassoSelectTool"},{"attributes":{},"id":"56564","type":"LinearScale"},{"attributes":{"callback":null},"id":"56587","type":"HoverTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"56617","type":"GlyphRenderer"},{"id":"56612","type":"GlyphRenderer"}]},"id":"56622","type":"LegendItem"},{"attributes":{"source":{"id":"56599","type":"ColumnDataSource"}},"id":"56603","type":"CDSView"},{"attributes":{"tools":[{"id":"56578","type":"PanTool"},{"id":"56579","type":"BoxZoomTool"},{"id":"56580","type":"WheelZoomTool"},{"id":"56581","type":"BoxSelectTool"},{"id":"56582","type":"LassoSelectTool"},{"id":"56583","type":"UndoTool"},{"id":"56584","type":"RedoTool"},{"id":"56585","type":"ResetTool"},{"id":"56586","type":"SaveTool"},{"id":"56587","type":"HoverTool"}]},"id":"56643","type":"ProxyToolbar"},{"attributes":{},"id":"56584","type":"RedoTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56633","type":"Selection"},"selection_policy":{"id":"56632","type":"UnionRenderers"}},"id":"56604","type":"ColumnDataSource"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"56602","type":"GlyphRenderer"},{"id":"56607","type":"GlyphRenderer"}]},"id":"56621","type":"LegendItem"},{"attributes":{},"id":"56632","type":"UnionRenderers"},{"attributes":{},"id":"56585","type":"ResetTool"},{"attributes":{},"id":"56633","type":"Selection"},{"attributes":{},"id":"56580","type":"WheelZoomTool"},{"attributes":{"above":[{"id":"56620","type":"Legend"}],"below":[{"id":"56568","type":"LinearAxis"}],"center":[{"id":"56572","type":"Grid"},{"id":"56577","type":"Grid"}],"left":[{"id":"56573","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56602","type":"GlyphRenderer"},{"id":"56607","type":"GlyphRenderer"},{"id":"56612","type":"GlyphRenderer"},{"id":"56617","type":"GlyphRenderer"},{"id":"56619","type":"Span"}],"title":{"id":"56623","type":"Title"},"toolbar":{"id":"56588","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56560","type":"DataRange1d"},"x_scale":{"id":"56564","type":"LinearScale"},"y_range":{"id":"56562","type":"DataRange1d"},"y_scale":{"id":"56566","type":"LinearScale"}},"id":"56559","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56578","type":"PanTool"},{"id":"56579","type":"BoxZoomTool"},{"id":"56580","type":"WheelZoomTool"},{"id":"56581","type":"BoxSelectTool"},{"id":"56582","type":"LassoSelectTool"},{"id":"56583","type":"UndoTool"},{"id":"56584","type":"RedoTool"},{"id":"56585","type":"ResetTool"},{"id":"56586","type":"SaveTool"},{"id":"56587","type":"HoverTool"}]},"id":"56588","type":"Toolbar"},{"attributes":{},"id":"56583","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56639","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"56559","subtype":"Figure","type":"Plot"},0,0]]},"id":"56642","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56601","type":"Circle"},{"attributes":{"axis_label":"ESS","formatter":{"id":"56629","type":"BasicTickFormatter"},"ticker":{"id":"56574","type":"BasicTicker"}},"id":"56573","type":"LinearAxis"},{"attributes":{"data_source":{"id":"56604","type":"ColumnDataSource"},"glyph":{"id":"56605","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56606","type":"Line"},"selection_glyph":null,"view":{"id":"56608","type":"CDSView"}},"id":"56607","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56605","type":"Line"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56631","type":"Selection"},"selection_policy":{"id":"56630","type":"UnionRenderers"}},"id":"56599","type":"ColumnDataSource"},{"attributes":{},"id":"56634","type":"UnionRenderers"},{"attributes":{},"id":"56637","type":"Selection"},{"attributes":{"text":"b"},"id":"56623","type":"Title"},{"attributes":{"ticker":{"id":"56569","type":"BasicTicker"}},"id":"56572","type":"Grid"},{"attributes":{},"id":"56566","type":"LinearScale"},{"attributes":{"click_policy":"hide","items":[{"id":"56621","type":"LegendItem"},{"id":"56622","type":"LegendItem"}],"location":"center_right","orientation":"horizontal"},"id":"56620","type":"Legend"},{"attributes":{"data_source":{"id":"56614","type":"ColumnDataSource"},"glyph":{"id":"56615","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56616","type":"Circle"},"selection_glyph":null,"view":{"id":"56618","type":"CDSView"}},"id":"56617","type":"GlyphRenderer"},{"attributes":{"source":{"id":"56614","type":"ColumnDataSource"}},"id":"56618","type":"CDSView"},{"attributes":{},"id":"56569","type":"BasicTicker"},{"attributes":{"overlay":{"id":"56638","type":"BoxAnnotation"}},"id":"56579","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"56644","type":"ToolbarBox"},{"id":"56642","type":"GridBox"}]},"id":"56645","type":"Column"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"56627","type":"BasicTickFormatter"},"ticker":{"id":"56569","type":"BasicTicker"}},"id":"56568","type":"LinearAxis"},{"attributes":{},"id":"56574","type":"BasicTicker"}],"root_ids":["56645"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"4951d72e-d0ff-49f1-8c34-e7667710dfb8","roots":{"56645":"a89ba219-df87-4e1e-95df-8050a9089f55"}}];
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