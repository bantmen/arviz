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
      };var element = document.getElementById("5f9a11c3-500e-449e-80d5-681bce562be9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5f9a11c3-500e-449e-80d5-681bce562be9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b541b2fc-a9e8-456d-95bf-96276787bba1":{"roots":{"references":[{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"74432","type":"DataRange1d"},{"attributes":{"children":[{"id":"74565","type":"ToolbarBox"},{"id":"74563","type":"GridBox"}]},"id":"74566","type":"Column"},{"attributes":{"source":{"id":"74518","type":"ColumnDataSource"}},"id":"74520","type":"CDSView"},{"attributes":{"below":[{"id":"74438","type":"LinearAxis"}],"center":[{"id":"74442","type":"Grid"},{"id":"74447","type":"Grid"}],"left":[{"id":"74443","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"74512","type":"GlyphRenderer"},{"id":"74514","type":"Span"},{"id":"74515","type":"Span"},{"id":"74516","type":"Span"},{"id":"74519","type":"GlyphRenderer"}],"title":{"id":"74521","type":"Title"},"toolbar":{"id":"74458","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74430","type":"DataRange1d"},"x_scale":{"id":"74434","type":"LinearScale"},"y_range":{"id":"74432","type":"DataRange1d"},"y_scale":{"id":"74436","type":"LinearScale"}},"id":"74429","subtype":"Figure","type":"Plot"},{"attributes":{"text":"tau"},"id":"74521","type":"Title"},{"attributes":{"callback":null},"id":"74430","type":"DataRange1d"},{"attributes":{},"id":"74476","type":"LinearScale"},{"attributes":{"ticker":{"id":"74439","type":"BasicTicker"}},"id":"74442","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"74556","type":"Selection"},"selection_policy":{"id":"74555","type":"UnionRenderers"}},"id":"74523","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"74514","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74524","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"74488","type":"PanTool"},{"id":"74489","type":"BoxZoomTool"},{"id":"74490","type":"WheelZoomTool"},{"id":"74491","type":"BoxSelectTool"},{"id":"74492","type":"LassoSelectTool"},{"id":"74493","type":"UndoTool"},{"id":"74494","type":"RedoTool"},{"id":"74495","type":"ResetTool"},{"id":"74496","type":"SaveTool"},{"id":"74497","type":"HoverTool"}]},"id":"74498","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"74448","type":"PanTool"},{"id":"74449","type":"BoxZoomTool"},{"id":"74450","type":"WheelZoomTool"},{"id":"74451","type":"BoxSelectTool"},{"id":"74452","type":"LassoSelectTool"},{"id":"74453","type":"UndoTool"},{"id":"74454","type":"RedoTool"},{"id":"74455","type":"ResetTool"},{"id":"74456","type":"SaveTool"},{"id":"74457","type":"HoverTool"}]},"id":"74458","type":"Toolbar"},{"attributes":{},"id":"74434","type":"LinearScale"},{"attributes":{"data_source":{"id":"74509","type":"ColumnDataSource"},"glyph":{"id":"74510","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74511","type":"Circle"},"selection_glyph":null,"view":{"id":"74513","type":"CDSView"}},"id":"74512","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74525","type":"Circle"},{"attributes":{},"id":"74484","type":"BasicTicker"},{"attributes":{"data_source":{"id":"74523","type":"ColumnDataSource"},"glyph":{"id":"74524","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74525","type":"Circle"},"selection_glyph":null,"view":{"id":"74527","type":"CDSView"}},"id":"74526","type":"GlyphRenderer"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"74554","type":"BasicTickFormatter"},"ticker":{"id":"74484","type":"BasicTicker"}},"id":"74483","type":"LinearAxis"},{"attributes":{"below":[{"id":"74478","type":"LinearAxis"}],"center":[{"id":"74482","type":"Grid"},{"id":"74487","type":"Grid"}],"left":[{"id":"74483","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"74526","type":"GlyphRenderer"},{"id":"74528","type":"Span"},{"id":"74529","type":"Span"},{"id":"74530","type":"Span"},{"id":"74533","type":"GlyphRenderer"}],"title":{"id":"74535","type":"Title"},"toolbar":{"id":"74498","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74470","type":"DataRange1d"},"x_scale":{"id":"74474","type":"LinearScale"},"y_range":{"id":"74472","type":"DataRange1d"},"y_scale":{"id":"74476","type":"LinearScale"}},"id":"74469","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"74523","type":"ColumnDataSource"}},"id":"74527","type":"CDSView"},{"attributes":{},"id":"74495","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"74528","type":"Span"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"74543","type":"Selection"},"selection_policy":{"id":"74542","type":"UnionRenderers"}},"id":"74509","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"74548","type":"PolyAnnotation"}},"id":"74452","type":"LassoSelectTool"},{"attributes":{},"id":"74496","type":"SaveTool"},{"attributes":{"toolbar":{"id":"74564","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"74565","type":"ToolbarBox"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"74529","type":"Span"},{"attributes":{},"id":"74494","type":"RedoTool"},{"attributes":{"children":[[{"id":"74429","subtype":"Figure","type":"Plot"},0,0],[{"id":"74469","subtype":"Figure","type":"Plot"},0,1]]},"id":"74563","type":"GridBox"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"74530","type":"Span"},{"attributes":{"callback":null,"overlay":{"id":"74560","type":"BoxAnnotation"}},"id":"74491","type":"BoxSelectTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"74531","type":"Dash"},{"attributes":{"callback":null,"overlay":{"id":"74561","type":"PolyAnnotation"}},"id":"74492","type":"LassoSelectTool"},{"attributes":{},"id":"74479","type":"BasicTicker"},{"attributes":{},"id":"74453","type":"UndoTool"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"74558","type":"Selection"},"selection_policy":{"id":"74557","type":"UnionRenderers"}},"id":"74532","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"74532","type":"ColumnDataSource"},"glyph":{"id":"74531","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74534","type":"CDSView"}},"id":"74533","type":"GlyphRenderer"},{"attributes":{"source":{"id":"74532","type":"ColumnDataSource"}},"id":"74534","type":"CDSView"},{"attributes":{},"id":"74454","type":"RedoTool"},{"attributes":{},"id":"74455","type":"ResetTool"},{"attributes":{"text":"mu"},"id":"74535","type":"Title"},{"attributes":{},"id":"74539","type":"BasicTickFormatter"},{"attributes":{},"id":"74541","type":"BasicTickFormatter"},{"attributes":{},"id":"74488","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"74516","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74510","type":"Circle"},{"attributes":{},"id":"74542","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74511","type":"Circle"},{"attributes":{"overlay":{"id":"74559","type":"BoxAnnotation"}},"id":"74489","type":"BoxZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"74552","type":"BasicTickFormatter"},"ticker":{"id":"74479","type":"BasicTicker"}},"id":"74478","type":"LinearAxis"},{"attributes":{},"id":"74543","type":"Selection"},{"attributes":{},"id":"74544","type":"UnionRenderers"},{"attributes":{},"id":"74545","type":"Selection"},{"attributes":{},"id":"74490","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74546","type":"BoxAnnotation"},{"attributes":{},"id":"74493","type":"UndoTool"},{"attributes":{"data_source":{"id":"74518","type":"ColumnDataSource"},"glyph":{"id":"74517","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74520","type":"CDSView"}},"id":"74519","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74547","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"74546","type":"BoxAnnotation"}},"id":"74449","type":"BoxZoomTool"},{"attributes":{},"id":"74456","type":"SaveTool"},{"attributes":{"callback":null},"id":"74497","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"74548","type":"PolyAnnotation"},{"attributes":{},"id":"74450","type":"WheelZoomTool"},{"attributes":{},"id":"74552","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"74547","type":"BoxAnnotation"}},"id":"74451","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"74457","type":"HoverTool"},{"attributes":{},"id":"74554","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"74517","type":"Dash"},{"attributes":{},"id":"74555","type":"UnionRenderers"},{"attributes":{},"id":"74439","type":"BasicTicker"},{"attributes":{},"id":"74556","type":"Selection"},{"attributes":{},"id":"74448","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"74515","type":"Span"},{"attributes":{"dimension":1,"ticker":{"id":"74484","type":"BasicTicker"}},"id":"74487","type":"Grid"},{"attributes":{},"id":"74474","type":"LinearScale"},{"attributes":{},"id":"74557","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"74470","type":"DataRange1d"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"74472","type":"DataRange1d"},{"attributes":{},"id":"74558","type":"Selection"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"74541","type":"BasicTickFormatter"},"ticker":{"id":"74444","type":"BasicTicker"}},"id":"74443","type":"LinearAxis"},{"attributes":{"ticker":{"id":"74479","type":"BasicTicker"}},"id":"74482","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74559","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74560","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"74444","type":"BasicTicker"}},"id":"74447","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"74561","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"74545","type":"Selection"},"selection_policy":{"id":"74544","type":"UnionRenderers"}},"id":"74518","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"74539","type":"BasicTickFormatter"},"ticker":{"id":"74439","type":"BasicTicker"}},"id":"74438","type":"LinearAxis"},{"attributes":{},"id":"74444","type":"BasicTicker"},{"attributes":{"tools":[{"id":"74448","type":"PanTool"},{"id":"74449","type":"BoxZoomTool"},{"id":"74450","type":"WheelZoomTool"},{"id":"74451","type":"BoxSelectTool"},{"id":"74452","type":"LassoSelectTool"},{"id":"74453","type":"UndoTool"},{"id":"74454","type":"RedoTool"},{"id":"74455","type":"ResetTool"},{"id":"74456","type":"SaveTool"},{"id":"74457","type":"HoverTool"},{"id":"74488","type":"PanTool"},{"id":"74489","type":"BoxZoomTool"},{"id":"74490","type":"WheelZoomTool"},{"id":"74491","type":"BoxSelectTool"},{"id":"74492","type":"LassoSelectTool"},{"id":"74493","type":"UndoTool"},{"id":"74494","type":"RedoTool"},{"id":"74495","type":"ResetTool"},{"id":"74496","type":"SaveTool"},{"id":"74497","type":"HoverTool"}]},"id":"74564","type":"ProxyToolbar"},{"attributes":{"source":{"id":"74509","type":"ColumnDataSource"}},"id":"74513","type":"CDSView"},{"attributes":{},"id":"74436","type":"LinearScale"}],"root_ids":["74566"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"b541b2fc-a9e8-456d-95bf-96276787bba1","roots":{"74566":"5f9a11c3-500e-449e-80d5-681bce562be9"}}];
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