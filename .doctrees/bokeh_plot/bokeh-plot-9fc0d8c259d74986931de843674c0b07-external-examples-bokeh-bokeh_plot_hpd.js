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
      };var element = document.getElementById("0e3f9b1a-f45d-4846-944d-66c8c7528a28");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0e3f9b1a-f45d-4846-944d-66c8c7528a28' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5a914bf8-35e2-4015-b3a8-25875a1b3857":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"57735","type":"BoxAnnotation"}},"id":"57696","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"57719","type":"ColumnDataSource"},"glyph":{"id":"57720","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57721","type":"Line"},"selection_glyph":null,"view":{"id":"57723","type":"CDSView"}},"id":"57722","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"y5i3s4H+DcAdeHtNKMgKwHpJDsvw3QHAi9zFhSkP/b9xlHDdR/b7v53BttBJ+Pq/GIbvbSnJ+b8jhyVODMD3vxl1nWjyDvW/nuwQHTKv9L+j2wF2K6T0vxpddTP5VPS/AErwjeCr878IIOdkL47zv3BkKww7XvO/Pvh4jOUD878kIWgRlDXxv+g4if4tH/G/hUEKMCqz8L/EnpoZGqbwv8KxGNAOJfC/x/+bobtb77+82atvF/zuv1cKTGueRe6/vjUxpSUd678wPkjVzFDqvwhfCKtNZOm/6cHCLZOu57+gbM0o3ZHmv0VPgr0I5eW/19k79UnU5b/U8L1fsnXlv+pDwxyDluO/pkU43P/d4r9aNI+x6A/iv1m3OwqH1uG/uKoBVsFr379K801MGVHfvy/ZX9d3Kd6/FyaNJ9ct3b9UXc/QWHDcv6BZPrGd9tq/1R6Ym7Uv2r9ZrxG9f3XYv8Vn3GhPcte/5FzmSMgA17+cuqE5KRjTv1GZrNe2XdK/nEkl9YBF0L/k63YmeinQv2b+ZZUVIsW/VPhd+tsQxL+RAp8ZkQu/vy3VLqZYMLu/ip8hKa2+q7/TEBWH74aQv7lp289APJQ/GxCpCKs9sT/z/+z5bAq9P5QZ3Y/OLsI/7x2AtRz7xD9kHhT4QvLJP22Ha+9QScs/xQFOpdy1yz9z5DCw/xrRP4E4ip6hy9M/evDgGLTu0z/0ouuWoIvUP3sFMYvoEtg/aSWMSL0Z2D8CclEKaAHcP+qQPDgk5d0/uJ9HimuT3j/pSFEn60TfP4nwl5kjP+E/gmpkCw8y4z8EjaKtsWTkPxqd7Tt+w+Y/MAYazaHQ5z/UYSH9ZhLpP1IRWpCFv+s/fiFJH1Kx8D9tzvJ4HQLxP6n/mWzhQfE/G7e7iah38T8BAAjPUlXyP8Ym1oKT4/I/sdILAois8z9XROS3hjf1P4StUF/OefU/hfjvaFGP9T/SbhLm0/f1P6EwpiofOvY/RZ39Qdk9+D+kNxm9r0b4P/R5WxSzY/o/n3Juqx47/T9gqypjmeAAQIZQBetN3wFAg1zLrsn9AUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"qDlDYvILwD+MHxLKXt/UPwxt42keROw/uhEdPWt48T/ItUcR3ATyPzKfpBfbg/I/9DwISWsb8z9uPO3Y+R/0P3RFscuGePU/sYl38Wao9T8uEv9E6q31P3NRRWaD1fU/ANsHuQ8q9j/8b4xN6Dj2P8hN6nniUPY/4YPDOQ1+9j9u70v3NWX3P4xjuwBpcPc/Pt/652qm9z+esDLz8qz3Px+n85d47fc/DgCZFxEp+D+RCRUk+kD4P2r9LGWYbvg/kLKzlrY4+T908K3KzGv5Pz7oPZXspvk/hk+PNFsU+j/YpMy1iFv6Py9sn9C9hvo/igmxgu2K+j/LgxBok6L6PwYvzzhfGvs/lu7xCIBI+z/qMpzTBXz7PyoScT1eivs/qco/1YcS/D+XQXbW3BX8P9oEFAXROvw/PVsOG0Va/D9WFObl9HH8P8w02Eksofw/JfyMTAm6/D8Vyl0IUPH8Pwdz5BK2Ef0/ZDTj9uYf/T+syMvY+pz9P9ZsCiVJtP0/zFZb4U/3/T+EIjG70Pr9Pxqgqaberf4/eyBaQPK+/j/rBzN3owf/P1eJzjp9Jv8/gnlbSwWR/z/e1fEg8t7/P2rbz0A8FABAQKQirPZEAEAAtOezKXQAQM3ofnR2kQBA7wCs5dinAEDzoMAXks8AQDtce4dK2gBADnAq5a7dAEBHDgP7rxEBQIij6Bm6PAFACA+OQes+AUAvum4JukgBQFgQs4gugQFAV8KI1JuBAUAgF6WAFsABQA/Jg0NS3gFA/HmkuDbpAUCPFHWyTvQBQBH+MnPkJwJAUI1s4UFmAkCgUbQ1lowCQKOzfcdv2AJAxkCjORT6AkA6LKTfTCIDQCpCC7LwdwNAYEjSh1QsBECbszxeh0AEQOp/Jlt4UARAx+1uIupdBEAAAMKzVJUEQLKJteDkuARArPSCACLrBEAWEfmt4U0FQGEr1JdzXgVAIf47WtRjBUC0m4T59H0FQCiMqcqHjgVAUWd/UHYPBkDpTUbvqxEGQH3eFsXsmAZAqJzbqsdOB0CwVZWxTHAIQEOogvWm7whAQq5l1+T+CEA=","dtype":"float64","shape":[100]}},"selected":{"id":"57733","type":"Selection"},"selection_policy":{"id":"57732","type":"UnionRenderers"}},"id":"57719","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"57689","type":"BasicTicker"}},"id":"57692","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"57721","type":"Line"},{"attributes":{"callback":null,"overlay":{"id":"57736","type":"PolyAnnotation"}},"id":"57697","type":"LassoSelectTool"},{"attributes":{},"id":"57681","type":"LinearScale"},{"attributes":{},"id":"57731","type":"Selection"},{"attributes":{"callback":null},"id":"57702","type":"HoverTool"},{"attributes":{"text":""},"id":"57724","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"57736","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"57693","type":"PanTool"},{"id":"57694","type":"BoxZoomTool"},{"id":"57695","type":"WheelZoomTool"},{"id":"57696","type":"BoxSelectTool"},{"id":"57697","type":"LassoSelectTool"},{"id":"57698","type":"UndoTool"},{"id":"57699","type":"RedoTool"},{"id":"57700","type":"ResetTool"},{"id":"57701","type":"SaveTool"},{"id":"57702","type":"HoverTool"}]},"id":"57703","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57734","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"57734","type":"BoxAnnotation"}},"id":"57694","type":"BoxZoomTool"},{"attributes":{},"id":"57698","type":"UndoTool"},{"attributes":{},"id":"57684","type":"BasicTicker"},{"attributes":{},"id":"57699","type":"RedoTool"},{"attributes":{"formatter":{"id":"57729","type":"BasicTickFormatter"},"ticker":{"id":"57689","type":"BasicTicker"}},"id":"57688","type":"LinearAxis"},{"attributes":{"formatter":{"id":"57727","type":"BasicTickFormatter"},"ticker":{"id":"57684","type":"BasicTicker"}},"id":"57683","type":"LinearAxis"},{"attributes":{},"id":"57700","type":"ResetTool"},{"attributes":{},"id":"57701","type":"SaveTool"},{"attributes":{},"id":"57679","type":"LinearScale"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"57716","type":"Patch"},{"attributes":{},"id":"57689","type":"BasicTicker"},{"attributes":{},"id":"57727","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"57683","type":"LinearAxis"}],"center":[{"id":"57687","type":"Grid"},{"id":"57692","type":"Grid"}],"left":[{"id":"57688","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"57717","type":"GlyphRenderer"},{"id":"57722","type":"GlyphRenderer"}],"title":{"id":"57724","type":"Title"},"toolbar":{"id":"57703","type":"Toolbar"},"x_range":{"id":"57675","type":"DataRange1d"},"x_scale":{"id":"57679","type":"LinearScale"},"y_range":{"id":"57677","type":"DataRange1d"},"y_scale":{"id":"57681","type":"LinearScale"}},"id":"57674","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"57684","type":"BasicTicker"}},"id":"57687","type":"Grid"},{"attributes":{},"id":"57732","type":"UnionRenderers"},{"attributes":{},"id":"57733","type":"Selection"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"57720","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57735","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"57675","type":"DataRange1d"},{"attributes":{"data_source":{"id":"57714","type":"ColumnDataSource"},"glyph":{"id":"57715","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57716","type":"Patch"},"selection_glyph":null,"view":{"id":"57718","type":"CDSView"}},"id":"57717","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"57715","type":"Patch"},{"attributes":{"callback":null},"id":"57677","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"57731","type":"Selection"},"selection_policy":{"id":"57730","type":"UnionRenderers"}},"id":"57714","type":"ColumnDataSource"},{"attributes":{"source":{"id":"57714","type":"ColumnDataSource"}},"id":"57718","type":"CDSView"},{"attributes":{},"id":"57693","type":"PanTool"},{"attributes":{},"id":"57695","type":"WheelZoomTool"},{"attributes":{"source":{"id":"57719","type":"ColumnDataSource"}},"id":"57723","type":"CDSView"},{"attributes":{},"id":"57729","type":"BasicTickFormatter"},{"attributes":{},"id":"57730","type":"UnionRenderers"}],"root_ids":["57674"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"5a914bf8-35e2-4015-b3a8-25875a1b3857","roots":{"57674":"0e3f9b1a-f45d-4846-944d-66c8c7528a28"}}];
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