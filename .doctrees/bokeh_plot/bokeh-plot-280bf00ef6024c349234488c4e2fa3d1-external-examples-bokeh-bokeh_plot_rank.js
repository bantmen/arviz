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
      };var element = document.getElementById("b94481e8-dbcc-4fd4-afb0-b71a58505835");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b94481e8-dbcc-4fd4-afb0-b71a58505835' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"32b24865-b9f9-4aae-927c-7f8749eadeb9":{"roots":{"references":[{"attributes":{"data_source":{"id":"78816","type":"ColumnDataSource"},"glyph":{"id":"78817","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78818","type":"VBar"},"selection_glyph":null,"view":{"id":"78820","type":"CDSView"}},"id":"78819","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"78821","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"78857","type":"BasicTickFormatter"},"ticker":{"id":"78834","type":"FixedTicker"}},"id":"78756","type":"LinearAxis"},{"attributes":{"source":{"id":"78810","type":"ColumnDataSource"}},"id":"78814","type":"CDSView"},{"attributes":{},"id":"78860","type":"UnionRenderers"},{"attributes":{},"id":"78729","type":"RedoTool"},{"attributes":{"ticker":{"id":"78752","type":"BasicTicker"}},"id":"78755","type":"Grid"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"78815","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78866","type":"BoxAnnotation"},{"attributes":{},"id":"78841","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78823","type":"VBar"},{"attributes":{},"id":"78731","type":"SaveTool"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78824","type":"VBar"},{"attributes":{},"id":"78843","type":"Selection"},{"attributes":{},"id":"78768","type":"ResetTool"},{"attributes":{},"id":"78861","type":"Selection"},{"attributes":{},"id":"78840","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78863","type":"Selection"},"selection_policy":{"id":"78862","type":"UnionRenderers"}},"id":"78822","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"78810","type":"ColumnDataSource"},"glyph":{"id":"78811","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78812","type":"VBar"},"selection_glyph":null,"view":{"id":"78814","type":"CDSView"}},"id":"78813","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78818","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"78805","type":"Span"},{"attributes":{"data_source":{"id":"78794","type":"ColumnDataSource"},"glyph":{"id":"78795","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78796","type":"VBar"},"selection_glyph":null,"view":{"id":"78798","type":"CDSView"}},"id":"78797","type":"GlyphRenderer"},{"attributes":{},"id":"78767","type":"RedoTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78817","type":"VBar"},{"attributes":{},"id":"78862","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"78770","type":"HoverTool"},{"attributes":{"callback":null},"id":"78732","type":"HoverTool"},{"attributes":{},"id":"78842","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"78850","type":"BoxAnnotation"}},"id":"78724","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"78751","type":"LinearAxis"}],"center":[{"id":"78755","type":"Grid"},{"id":"78760","type":"Grid"},{"id":"78815","type":"Span"},{"id":"78821","type":"Span"},{"id":"78827","type":"Span"},{"id":"78833","type":"Span"}],"left":[{"id":"78756","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"78813","type":"GlyphRenderer"},{"id":"78819","type":"GlyphRenderer"},{"id":"78825","type":"GlyphRenderer"},{"id":"78831","type":"GlyphRenderer"}],"title":{"id":"78836","type":"Title"},"toolbar":{"id":"78771","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"78705","type":"DataRange1d"},"x_scale":{"id":"78747","type":"LinearScale"},"y_range":{"id":"78707","type":"DataRange1d"},"y_scale":{"id":"78749","type":"LinearScale"}},"id":"78744","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78811","type":"VBar"},{"attributes":{},"id":"78863","type":"Selection"},{"attributes":{"source":{"id":"78782","type":"ColumnDataSource"}},"id":"78786","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78789","type":"VBar"},{"attributes":{},"id":"78766","type":"UndoTool"},{"attributes":{},"id":"78711","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78812","type":"VBar"},{"attributes":{"callback":null,"overlay":{"id":"78851","type":"BoxAnnotation"}},"id":"78726","type":"BoxSelectTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"78833","type":"Span"},{"attributes":{},"id":"78845","type":"Selection"},{"attributes":{"data_source":{"id":"78800","type":"ColumnDataSource"},"glyph":{"id":"78801","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78802","type":"VBar"},"selection_glyph":null,"view":{"id":"78804","type":"CDSView"}},"id":"78803","type":"GlyphRenderer"},{"attributes":{"source":{"id":"78794","type":"ColumnDataSource"}},"id":"78798","type":"CDSView"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78859","type":"Selection"},"selection_policy":{"id":"78858","type":"UnionRenderers"}},"id":"78810","type":"ColumnDataSource"},{"attributes":{},"id":"78747","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78796","type":"VBar"},{"attributes":{},"id":"78864","type":"UnionRenderers"},{"attributes":{"source":{"id":"78822","type":"ColumnDataSource"}},"id":"78826","type":"CDSView"},{"attributes":{},"id":"78844","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"78723","type":"PanTool"},{"id":"78724","type":"BoxZoomTool"},{"id":"78725","type":"WheelZoomTool"},{"id":"78726","type":"BoxSelectTool"},{"id":"78727","type":"LassoSelectTool"},{"id":"78728","type":"UndoTool"},{"id":"78729","type":"RedoTool"},{"id":"78730","type":"ResetTool"},{"id":"78731","type":"SaveTool"},{"id":"78732","type":"HoverTool"},{"id":"78761","type":"PanTool"},{"id":"78762","type":"BoxZoomTool"},{"id":"78763","type":"WheelZoomTool"},{"id":"78764","type":"BoxSelectTool"},{"id":"78765","type":"LassoSelectTool"},{"id":"78766","type":"UndoTool"},{"id":"78767","type":"RedoTool"},{"id":"78768","type":"ResetTool"},{"id":"78769","type":"SaveTool"},{"id":"78770","type":"HoverTool"}]},"id":"78871","type":"ProxyToolbar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78802","type":"VBar"},{"attributes":{"data_source":{"id":"78822","type":"ColumnDataSource"},"glyph":{"id":"78823","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78824","type":"VBar"},"selection_glyph":null,"view":{"id":"78826","type":"CDSView"}},"id":"78825","type":"GlyphRenderer"},{"attributes":{},"id":"78849","type":"Selection"},{"attributes":{},"id":"78865","type":"Selection"},{"attributes":{},"id":"78730","type":"ResetTool"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"78787","type":"Span"},{"attributes":{"callback":null,"overlay":{"id":"78868","type":"PolyAnnotation"}},"id":"78765","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78795","type":"VBar"},{"attributes":{},"id":"78752","type":"BasicTicker"},{"attributes":{"text":"tau"},"id":"78808","type":"Title"},{"attributes":{"ticks":[0,1,2,3]},"id":"78834","type":"FixedTicker"},{"attributes":{},"id":"78846","type":"UnionRenderers"},{"attributes":{"below":[{"id":"78713","type":"LinearAxis"}],"center":[{"id":"78717","type":"Grid"},{"id":"78722","type":"Grid"},{"id":"78787","type":"Span"},{"id":"78793","type":"Span"},{"id":"78799","type":"Span"},{"id":"78805","type":"Span"}],"left":[{"id":"78718","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"78785","type":"GlyphRenderer"},{"id":"78791","type":"GlyphRenderer"},{"id":"78797","type":"GlyphRenderer"},{"id":"78803","type":"GlyphRenderer"}],"title":{"id":"78808","type":"Title"},"toolbar":{"id":"78733","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"78705","type":"DataRange1d"},"x_scale":{"id":"78709","type":"LinearScale"},"y_range":{"id":"78707","type":"DataRange1d"},"y_scale":{"id":"78711","type":"LinearScale"}},"id":"78704","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78867","type":"BoxAnnotation"},{"attributes":{},"id":"78709","type":"LinearScale"},{"attributes":{"data_source":{"id":"78828","type":"ColumnDataSource"},"glyph":{"id":"78829","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78830","type":"VBar"},"selection_glyph":null,"view":{"id":"78832","type":"CDSView"}},"id":"78831","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"78707","type":"DataRange1d"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78790","type":"VBar"},{"attributes":{"callback":null,"overlay":{"id":"78867","type":"BoxAnnotation"}},"id":"78764","type":"BoxSelectTool"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"78827","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"78856","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"78752","type":"BasicTicker"}},"id":"78751","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"78868","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78783","type":"VBar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78847","type":"Selection"},"selection_policy":{"id":"78846","type":"UnionRenderers"}},"id":"78794","type":"ColumnDataSource"},{"attributes":{"source":{"id":"78800","type":"ColumnDataSource"}},"id":"78804","type":"CDSView"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78865","type":"Selection"},"selection_policy":{"id":"78864","type":"UnionRenderers"}},"id":"78828","type":"ColumnDataSource"},{"attributes":{},"id":"78847","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"78852","type":"PolyAnnotation"}},"id":"78727","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78829","type":"VBar"},{"attributes":{"toolbar":{"id":"78871","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"78872","type":"ToolbarBox"},{"attributes":{},"id":"78763","type":"WheelZoomTool"},{"attributes":{"source":{"id":"78788","type":"ColumnDataSource"}},"id":"78792","type":"CDSView"},{"attributes":{},"id":"78728","type":"UndoTool"},{"attributes":{},"id":"78848","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"78793","type":"Span"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"78852","type":"PolyAnnotation"},{"attributes":{"source":{"id":"78828","type":"ColumnDataSource"}},"id":"78832","type":"CDSView"},{"attributes":{"children":[{"id":"78872","type":"ToolbarBox"},{"id":"78870","type":"GridBox"}]},"id":"78873","type":"Column"},{"attributes":{},"id":"78761","type":"PanTool"},{"attributes":{},"id":"78714","type":"BasicTicker"},{"attributes":{"overlay":{"id":"78866","type":"BoxAnnotation"}},"id":"78762","type":"BoxZoomTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"78840","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"78714","type":"BasicTicker"}},"id":"78713","type":"LinearAxis"},{"attributes":{},"id":"78725","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78851","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78830","type":"VBar"},{"attributes":{"dimension":1,"ticker":{"id":"78757","type":"BasicTicker"}},"id":"78760","type":"Grid"},{"attributes":{},"id":"78719","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78850","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"78788","type":"ColumnDataSource"},"glyph":{"id":"78789","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78790","type":"VBar"},"selection_glyph":null,"view":{"id":"78792","type":"CDSView"}},"id":"78791","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78801","type":"VBar"},{"attributes":{"children":[[{"id":"78704","subtype":"Figure","type":"Plot"},0,0],[{"id":"78744","subtype":"Figure","type":"Plot"},0,1]]},"id":"78870","type":"GridBox"},{"attributes":{"ticker":{"id":"78714","type":"BasicTicker"}},"id":"78717","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"78723","type":"PanTool"},{"id":"78724","type":"BoxZoomTool"},{"id":"78725","type":"WheelZoomTool"},{"id":"78726","type":"BoxSelectTool"},{"id":"78727","type":"LassoSelectTool"},{"id":"78728","type":"UndoTool"},{"id":"78729","type":"RedoTool"},{"id":"78730","type":"ResetTool"},{"id":"78731","type":"SaveTool"},{"id":"78732","type":"HoverTool"}]},"id":"78733","type":"Toolbar"},{"attributes":{},"id":"78858","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78784","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"78841","type":"BasicTickFormatter"},"ticker":{"id":"78806","type":"FixedTicker"}},"id":"78718","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"78799","type":"Span"},{"attributes":{},"id":"78757","type":"BasicTicker"},{"attributes":{},"id":"78723","type":"PanTool"},{"attributes":{},"id":"78859","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"78806","type":"FixedTicker"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78843","type":"Selection"},"selection_policy":{"id":"78842","type":"UnionRenderers"}},"id":"78782","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"78719","type":"BasicTicker"}},"id":"78722","type":"Grid"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78845","type":"Selection"},"selection_policy":{"id":"78844","type":"UnionRenderers"}},"id":"78788","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"78705","type":"DataRange1d"},{"attributes":{"text":"mu"},"id":"78836","type":"Title"},{"attributes":{},"id":"78749","type":"LinearScale"},{"attributes":{},"id":"78856","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78849","type":"Selection"},"selection_policy":{"id":"78848","type":"UnionRenderers"}},"id":"78800","type":"ColumnDataSource"},{"attributes":{"source":{"id":"78816","type":"ColumnDataSource"}},"id":"78820","type":"CDSView"},{"attributes":{"data_source":{"id":"78782","type":"ColumnDataSource"},"glyph":{"id":"78783","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78784","type":"VBar"},"selection_glyph":null,"view":{"id":"78786","type":"CDSView"}},"id":"78785","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78861","type":"Selection"},"selection_policy":{"id":"78860","type":"UnionRenderers"}},"id":"78816","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"78761","type":"PanTool"},{"id":"78762","type":"BoxZoomTool"},{"id":"78763","type":"WheelZoomTool"},{"id":"78764","type":"BoxSelectTool"},{"id":"78765","type":"LassoSelectTool"},{"id":"78766","type":"UndoTool"},{"id":"78767","type":"RedoTool"},{"id":"78768","type":"ResetTool"},{"id":"78769","type":"SaveTool"},{"id":"78770","type":"HoverTool"}]},"id":"78771","type":"Toolbar"},{"attributes":{},"id":"78857","type":"BasicTickFormatter"},{"attributes":{},"id":"78769","type":"SaveTool"}],"root_ids":["78873"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"32b24865-b9f9-4aae-927c-7f8749eadeb9","roots":{"78873":"b94481e8-dbcc-4fd4-afb0-b71a58505835"}}];
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