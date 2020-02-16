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
      };var element = document.getElementById("f04fe336-aaea-4adb-9a21-47c3c0806c58");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f04fe336-aaea-4adb-9a21-47c3c0806c58' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f1f18164-5935-4c19-996e-1ac39c4d6ed7":{"roots":{"references":[{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58703","type":"Patch"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"XPYYGea45z+Ku9wjltbnP7qAoC5G9Oc/6UVkOfYR6D8YCyhEpi/oP0fQ605WTeg/d5WvWQZr6D+mWnNktojoP9UfN29mpug/BOX6eRbE6D8zqr6ExuHoP2Nvgo92/+g/kjRGmiYd6T/B+Qml1jrpP/C+za+GWOk/H4SRujZ26T9OSVXF5pPpP34OGdCWsek/rdPc2kbP6T/cmKDl9uzpPwteZPCmCuo/OiMo+1Yo6j9q6OsFB0bqP5mtrxC3Y+o/yHJzG2eB6j/3NzcmF5/qPyb9+jDHvOo/VsK+O3fa6j+Fh4JGJ/jqP7RMRlHXFes/4xEKXIcz6z8S181mN1HrP0KckXHnbus/cWFVfJeM6z+gJhmHR6rrP8/r3JH3x+s//rCgnKfl6z8tdmSnVwPsP107KLIHIew/jADsvLc+7D+7xa/HZ1zsP+qKc9IXeuw/GVA33ceX7D9JFfvnd7XsP3javvIn0+w/p5+C/dfw7D/WZEYIiA7tPwUqChM4LO0/NO/NHehJ7T9ktJEomGftP5N5VTNIhe0/wj4ZPvii7T/xA91IqMDtPyDJoFNY3u0/UI5kXgj87T9/UyhpuBnuP64Y7HNoN+4/3d2vfhhV7j8Mo3OJyHLuPzxoN5R4kO4/ay37niiu7j+a8r6p2MvuP8m3grSI6e4/ybeCtIjp7j/Jt4K0iOnuP5ryvqnYy+4/ay37niiu7j88aDeUeJDuPwyjc4nIcu4/3d2vfhhV7j+uGOxzaDfuP39TKGm4Ge4/UI5kXgj87T8gyaBTWN7tP/ED3UiowO0/wj4ZPvii7T+TeVUzSIXtP2S0kSiYZ+0/NO/NHehJ7T8FKgoTOCztP9ZkRgiIDu0/p5+C/dfw7D942r7yJ9PsP0kV++d3tew/GVA33ceX7D/qinPSF3rsP7vFr8dnXOw/jADsvLc+7D9dOyiyByHsPy12ZKdXA+w//rCgnKfl6z/P69yR98frP6AmGYdHqus/cWFVfJeM6z9CnJFx527rPxLXzWY3Ues/4xEKXIcz6z+0TEZR1xXrP4WHgkYn+Oo/VsK+O3fa6j8m/fowx7zqP/c3NyYXn+o/yHJzG2eB6j+Zra8Qt2PqP2ro6wUHRuo/OiMo+1Yo6j8LXmTwpgrqP9yYoOX27Ok/rdPc2kbP6T9+DhnQlrHpP05JVcXmk+k/H4SRujZ26T/wvs2vhljpP8H5CaXWOuk/kjRGmiYd6T9jb4KPdv/oPzOqvoTG4eg/BOX6eRbE6D/VHzdvZqboP6Zac2S2iOg/d5WvWQZr6D9H0OtOVk3oPxgLKESmL+g/6UVkOfYR6D+6gKAuRvTnP4q73COW1uc/XPYYGea45z9c9hgZ5rjnPw==","dtype":"float64","shape":[128]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAedJ22S7btT950nbZLtu1P4QoQ9ctObY/ThBWJ3PXtj+60vu+e5C3P6HAZK26p7g/UyYEpc0Fuj8j5vBUwba7P9J758Dq1b0/pLFWP9dEwD/8XjvpstXBPxKc5pcdtsM/tanxKVjlxT/JXdqshV/IP7GE4uF2Nss/7PMHyfBgzj9u4bFcGfbQP+vmtjgK3NI/i5ZOnW3q1D/63HBZOBHXP2kXmvdpU9k/Mi0VCCeo2z9Q4zYwfQ7ePxX/pS1VQeA/tNhaPlKA4T9ewexcg8LiP5YDAZTWA+Q/d5F+h8JH5T9yogJqZYzmP+pJPCuWzuc/TKVVE98f6T9XuOSNbnbqP8aypQ7G1Os/9gtVYIU97T8KTzmzjrDuP7vB1WEjG/A/m8x0JcXm8D/ETRfrybrxP0rCjG8ZmfI/+ulliFeB8z+tFTIxz3T0P5FcsQwicPU/B5YrDzh39j8+IbD+I4T3PyZ2pVURn/g/1vYcuEO++T/UjXkSqOr6P7bd8juTIPw/l8yyvMRd/T8pr4LWGKT+P3VA5K818v8/sj/jtmimAEAa0FicclQBQN3wgLwYBQJAG8VpMxy3AkCGrOHAHWgDQDP3zqqsFgRAUDK2i6K/BEA7gjiDaGEFQJIgfT3x+gVAkv4S+RKJBkC8UydiwQkHQA9jZcIjfAdAzSCgNgDdB0AAAAAAAAAAAA==","dtype":"float64","shape":[128]}},"selected":{"id":"58734","type":"Selection"},"selection_policy":{"id":"58733","type":"UnionRenderers"}},"id":"58716","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"58716","type":"ColumnDataSource"},"glyph":{"id":"58717","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58718","type":"Patch"},"selection_glyph":null,"view":{"id":"58720","type":"CDSView"}},"id":"58719","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"58664","type":"DataRange1d"},{"attributes":{"source":{"id":"58706","type":"ColumnDataSource"}},"id":"58710","type":"CDSView"},{"attributes":{"overlay":{"id":"58735","type":"BoxAnnotation"}},"id":"58681","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"58724","type":"BasicTickFormatter"},"ticker":{"id":"58671","type":"BasicTicker"}},"id":"58670","type":"LinearAxis"},{"attributes":{"data_source":{"id":"58706","type":"ColumnDataSource"},"glyph":{"id":"58707","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58708","type":"Patch"},"selection_glyph":null,"view":{"id":"58710","type":"CDSView"}},"id":"58709","type":"GlyphRenderer"},{"attributes":{"source":{"id":"58716","type":"ColumnDataSource"}},"id":"58720","type":"CDSView"},{"attributes":{"callback":null},"id":"58689","type":"HoverTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"gv1jFOQn4j+ywicflEXiP+GH6ylEY+I/EE2vNPSA4j8/EnM/pJ7iP27XNkpUvOI/npz6VATa4j/NYb5ftPfiP/wmgmpkFeM/K+xFdRQz4z9asQmAxFDjP4p2zYp0buM/uTuRlSSM4z/oAFWg1KnjPxfGGKuEx+M/RovctTTl4z92UKDA5ALkP6QVZMuUIOQ/1Non1kQ+5D8DoOvg9FvkPzJlr+ukeeQ/Yipz9lSX5D+Q7zYBBbXkP8C0+gu10uQ/73m+FmXw5D/veb4WZfDkP+95vhZl8OQ/wLT6C7XS5D+Q7zYBBbXkP2Iqc/ZUl+Q/MmWv66R55D8DoOvg9FvkP9TaJ9ZEPuQ/pBVky5Qg5D92UKDA5ALkP0aL3LU05eM/F8YYq4TH4z/oAFWg1KnjP7k7kZUkjOM/inbNinRu4z9asQmAxFDjPyvsRXUUM+M//CaCamQV4z/NYb5ftPfiP56c+lQE2uI/btc2SlS84j8/EnM/pJ7iPxBNrzT0gOI/4YfrKURj4j+ywicflEXiP4L9YxTkJ+I/gv1jFOQn4j8=","dtype":"float64","shape":[52]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFAMQt/MsGQIUAxC38ywZA3PEqh77JBkBpj8+e18sGQMnUN03p0gZAl8a2zALaBkBc81phc+MGQGUGUmfO6QZAAb7AMRvxBkDAqt2fLvIGQPqABoOZ7gZArQVDHTTmBkCmWyfUp9cGQBk/oG4ZwQZAxxfiPZOfBkB6jH0x5HgGQHUI4gPfSgZAcaQViVgTBkCRXEPHE9UFQMO+pcMXkgVAUjoLWxdKBUAHVuhNhPwEQAbYkwNsrQRACgbi/H1aBEDeS8WX+wYEQOGASEpYswNAAAAAAAAAAAA=","dtype":"float64","shape":[52]}},"selected":{"id":"58730","type":"Selection"},"selection_policy":{"id":"58729","type":"UnionRenderers"}},"id":"58706","type":"ColumnDataSource"},{"attributes":{},"id":"58666","type":"LinearScale"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58717","type":"Patch"},{"attributes":{},"id":"58724","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58712","type":"Patch"},{"attributes":{},"id":"58726","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"58701","type":"ColumnDataSource"},"glyph":{"id":"58702","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58703","type":"Patch"},"selection_glyph":null,"view":{"id":"58705","type":"CDSView"}},"id":"58704","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"58662","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"58736","type":"BoxAnnotation"}},"id":"58683","type":"BoxSelectTool"},{"attributes":{},"id":"58727","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"58671","type":"BasicTicker"}},"id":"58674","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Hj+CIRUO5T9OBEYsxSvlP3zJCTd1SeU/rI7NQSVn5T/bU5FM1YTlPwoZVVeFouU/Ot4YYjXA5T9oo9xs5d3lP5hooHeV++U/xy1kgkUZ5j/28ieN9TbmPyW465elVOY/VH2volVy5j+EQnOtBZDmP7MHN7i1reY/4sz6wmXL5j8Rkr7NFenmP0BXgtjFBuc/cBxG43Uk5z+f4QnuJULnP86mzfjVX+c//WuRA4Z95z8sMVUONpvnPywxVQ42m+c/LDFVDjab5z/9a5EDhn3nP86mzfjVX+c/n+EJ7iVC5z9wHEbjdSTnP0BXgtjFBuc/EZK+zRXp5j/izPrCZcvmP7MHN7i1reY/hEJzrQWQ5j9Ufa+iVXLmPyW465elVOY/9vInjfU25j/HLWSCRRnmP5hooHeV++U/aKPcbOXd5T863hhiNcDlPwoZVVeFouU/21ORTNWE5T+sjs1BJWflP3zJCTd1SeU/TgRGLMUr5T8eP4IhFQ7lPx4/giEVDuU/","dtype":"float64","shape":[48]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9zNx5rLghAz3M3HmsuCEB5tLEKrW4IQL4OvHPjnQhAYPQoZTS+CEBDXnLk0s8IQK8k2CYK1AhA6OeZh8bMCECQzZZR5LoIQCXOKuYBoghA42bqtseACEDzSRzxslkIQKMOWqLoMQhAoTx1s7UFCEAgvlsmRNsHQDxND0i9sgdAchzEYVOJB0DcG3eby2EHQHnbP8oKPgdAt3vOZPgeB0CwPDdSdgMHQC3JZY047AZACy6objTcBkA0BgtB2tEGQAAAAAAAAAAA","dtype":"float64","shape":[48]}},"selected":{"id":"58732","type":"Selection"},"selection_policy":{"id":"58731","type":"UnionRenderers"}},"id":"58711","type":"ColumnDataSource"},{"attributes":{},"id":"58682","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"58680","type":"PanTool"},{"id":"58681","type":"BoxZoomTool"},{"id":"58682","type":"WheelZoomTool"},{"id":"58683","type":"BoxSelectTool"},{"id":"58684","type":"LassoSelectTool"},{"id":"58685","type":"UndoTool"},{"id":"58686","type":"RedoTool"},{"id":"58687","type":"ResetTool"},{"id":"58688","type":"SaveTool"},{"id":"58689","type":"HoverTool"}]},"id":"58690","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"58737","type":"PolyAnnotation"}},"id":"58684","type":"LassoSelectTool"},{"attributes":{},"id":"58728","type":"Selection"},{"attributes":{},"id":"58686","type":"RedoTool"},{"attributes":{},"id":"58732","type":"Selection"},{"attributes":{},"id":"58680","type":"PanTool"},{"attributes":{"below":[{"id":"58670","type":"LinearAxis"}],"center":[{"id":"58674","type":"Grid"},{"id":"58679","type":"Grid"}],"left":[{"id":"58675","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"58704","type":"GlyphRenderer"},{"id":"58709","type":"GlyphRenderer"},{"id":"58714","type":"GlyphRenderer"},{"id":"58719","type":"GlyphRenderer"}],"title":{"id":"58721","type":"Title"},"toolbar":{"id":"58690","type":"Toolbar"},"x_range":{"id":"58662","type":"DataRange1d"},"x_scale":{"id":"58666","type":"LinearScale"},"y_range":{"id":"58664","type":"DataRange1d"},"y_scale":{"id":"58668","type":"LinearScale"}},"id":"58661","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"58685","type":"UndoTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58708","type":"Patch"},{"attributes":{},"id":"58729","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"58711","type":"ColumnDataSource"},"glyph":{"id":"58712","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58713","type":"Patch"},"selection_glyph":null,"view":{"id":"58715","type":"CDSView"}},"id":"58714","type":"GlyphRenderer"},{"attributes":{},"id":"58730","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58718","type":"Patch"},{"attributes":{"text":""},"id":"58721","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"58676","type":"BasicTicker"}},"id":"58679","type":"Grid"},{"attributes":{},"id":"58731","type":"UnionRenderers"},{"attributes":{},"id":"58671","type":"BasicTicker"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58707","type":"Patch"},{"attributes":{},"id":"58676","type":"BasicTicker"},{"attributes":{},"id":"58733","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58735","type":"BoxAnnotation"},{"attributes":{"source":{"id":"58701","type":"ColumnDataSource"}},"id":"58705","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58736","type":"BoxAnnotation"},{"attributes":{},"id":"58668","type":"LinearScale"},{"attributes":{"formatter":{"id":"58726","type":"BasicTickFormatter"},"ticker":{"id":"58676","type":"BasicTicker"}},"id":"58675","type":"LinearAxis"},{"attributes":{},"id":"58734","type":"Selection"},{"attributes":{},"id":"58687","type":"ResetTool"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58702","type":"Patch"},{"attributes":{"source":{"id":"58711","type":"ColumnDataSource"}},"id":"58715","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58713","type":"Patch"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"58737","type":"PolyAnnotation"},{"attributes":{},"id":"58688","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"KNVghIHNzz/y9LfXICLQP1F/P+2AXdA/rwnHAuGY0D8OlE4YQdTQP2we1i2hD9E/yqhdQwFL0T8pM+VYYYbRP4e9bG7BwdE/5Uf0gyH90T9E0nuZgTjSP6JcA6/hc9I/AOeKxEGv0j9fcRLaoerSP737me8BJtM/HIYhBWJh0z96EKkawpzTP9iaMDAi2NM/NyW4RYIT1D+Vrz9b4k7UP/Q5x3BCitQ/UsROhqLF1D+wTtabAgHVPw7ZXbFiPNU/bWPlxsJ31T/M7WzcIrPVPyp49PGC7tU/iAJ8B+Mp1j/mjAMdQ2XWP0UXizKjoNY/o6ESSAPc1j8CLJpdYxfXP2C2IXPDUtc/vkCpiCOO1z8dyzCeg8nXP3tVuLPjBNg/2t8/yUNA2D84asfeo3vYP5b0TvQDt9g/9H7WCWTy2D9TCV4fxC3ZP7KT5TQkadk/EB5tSoSk2T9uqPRf5N/ZP8wyfHVEG9o/K70Di6RW2j+JR4ugBJLaP+jRErZkzdo/Rlyay8QI2z+k5iHhJETbPwNxqfaEf9s/YfswDOW62z/AhbghRfbbPx4QQDelMdw/fJrHTAVt3D/aJE9iZajcPzmv1nfF49w/mDlejSUf3T/2w+WihVrdP1RObbjlld0/stj0zUXR3T8RY3zjpQzeP2/tA/kFSN4/zneLDmaD3j8sAhMkxr7eP4qMmjkm+t4/6RYiT4Y13z9Hoalk5nDfP6YrMXpGrN8/BLa4j6bn3z8xIKBSgxHgP2DlY10zL+A/kKonaONM4D++b+tyk2rgP+40r31DiOA/HfpyiPOl4D9MvzaTo8PgP3yE+p1T4eA/qkm+qAP/4D/aDoKzsxzhPwnURb5jOuE/OJkJyRNY4T9oXs3Tw3XhP5Yjkd5zk+E/xuhU6SOx4T/1rRj0087hPyRz3P6D7OE/VDigCTQK4j9UOKAJNAriP1Q4oAk0CuI/JHPc/oPs4T/1rRj0087hP8boVOkjseE/liOR3nOT4T9oXs3Tw3XhPziZCckTWOE/CdRFvmM64T/aDoKzsxzhP6pJvqgD/+A/fIT6nVPh4D9MvzaTo8PgPx36cojzpeA/7jSvfUOI4D++b+tyk2rgP5CqJ2jjTOA/YOVjXTMv4D8xIKBSgxHgPwS2uI+m598/pisxekas3z9Hoalk5nDfP+kWIk+GNd8/ioyaOSb63j8sAhMkxr7eP853iw5mg94/b+0D+QVI3j8RY3zjpQzeP7LY9M1F0d0/VE5tuOWV3T/2w+WihVrdP5g5Xo0lH90/Oa/Wd8Xj3D/aJE9iZajcP3yax0wFbdw/HhBAN6Ux3D/AhbghRfbbP2H7MAzluts/A3Gp9oR/2z+k5iHhJETbP0ZcmsvECNs/6NEStmTN2j+JR4ugBJLaPyu9A4ukVto/zDJ8dUQb2j9uqPRf5N/ZPxAebUqEpNk/spPlNCRp2T9TCV4fxC3ZP/R+1glk8tg/lvRO9AO32D84asfeo3vYP9rfP8lDQNg/e1W4s+ME2D8dyzCeg8nXP75AqYgjjtc/YLYhc8NS1z8CLJpdYxfXP6OhEkgD3NY/RReLMqOg1j/mjAMdQ2XWP4gCfAfjKdY/Knj08YLu1T/M7WzcIrPVP21j5cbCd9U/DtldsWI81T+wTtabAgHVP1LEToaixdQ/9DnHcEKK1D+Vrz9b4k7UPzcluEWCE9Q/2JowMCLY0z96EKkawpzTPxyGIQViYdM/vfuZ7wEm0z9fcRLaoerSPwDnisRBr9I/olwDr+Fz0j9E0nuZgTjSP+VH9IMh/dE/h71sbsHB0T8pM+VYYYbRP8qoXUMBS9E/bB7WLaEP0T8OlE4YQdTQP68JxwLhmNA/UX8/7YBd0D/y9LfXICLQPyjVYISBzc8/KNVghIHNzz8=","dtype":"float64","shape":[178]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHFgNMOl8DQMcWA0w6XwNAdwGjzYIJA0AT1J9e6rQCQAlKntEYYQJAHph6QkYMAkDLXbfpALcBQEKsln+MXwFADeXouvoFAUDtSWbPLaoAQJfNRf+uSgBA71BSR/nR/z/alJz8rQb/P3tz3wtTLv4/uAZqiI9Q/T9Jp6tmQmb8Px39m2DydPs/6jkvffN++j941SJ1iIj5P/Bgz6CMjPg/eFSmm0qO9z+UBRaUjJL2P0W+87ral/U/Qp2E2syd9D8x5yeKXKzzP8YFfKg9xPI/1NrUwpnl8T9ezU0FMQ/xP2nQer9OQvA/m63ox7cE7z+zppOS2prtP3JZSo2ISOw/fO90+SMF6z9KeIANYtfpP4P4F4hhuug/McYRq2yr5z+BUNCpUavmP3CzLgpLt+U/AIuSX3nP5D8Y8jUns/HjP8QfzlEiG+M/nSHn84xP4j+XXkGwOY3hPzrMH4KszOA/6IUrr4AV4D8Ia8PcbM/eP59apehCd90/SGW2uJM63D/M1ZrcWQbbP67VOJ3R29k/5L/UlGzE2D+290HBhLTXP1wrz+ODpdY/P+mz9kig1T8rwA1/qpnUP+Ss7xE7ndM/bEebA6ek0j+1sNJZDa3RP9wWgfXjsdA/IGR2XWNmzz999N2ARHPNPx1YLLEihss/Db5y9PecyT8pUtLUFrrHP2za18VO4cU/Oktq4n4SxD9fH1jzfFXCPzRuZABlo8A/eZSaKm8ivj+jWdT9OR67P/283DpBR7g/ro3F4IShtT+E6t1pJzCzP5VqLNbg77A/QhEXu8LHrT/+vr2LsUeqP8lsyuu3JKc/+gKDEIlspD+j/o5uQhqiP9Gk/A2FLKA/N7RUMJkKnT8niC1gJ5SaP8qr65gpuJg/CvVnHchFlz8qYhizmxWWP9fHDP2oHZU/cjJTkq3WlD+GdDTpsI2UP7RThWyqcpQ/AAAAAAAAAAA=","dtype":"float64","shape":[178]}},"selected":{"id":"58728","type":"Selection"},"selection_policy":{"id":"58727","type":"UnionRenderers"}},"id":"58701","type":"ColumnDataSource"}],"root_ids":["58661"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"f1f18164-5935-4c19-996e-1ac39c4d6ed7","roots":{"58661":"f04fe336-aaea-4adb-9a21-47c3c0806c58"}}];
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