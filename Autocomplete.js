 $(function() {
      var countries = ["<h1>type in your text</h1>", "<h2>type in your text</h2>", "<h3>type in your text</h3>", "<h4>type in your text</h4>", "<h5>type in your text</h5>", "<p>type in your text</p>", "<img src=''>", "<ul><li>First</li><li>Second</li><li>Third</li></ul>", "<iframe src='https://www.google.com/' scrolling='no'>Iframes not supported</iframe>","<button onclick='mess();'></button>"];
      $("#msg").autocomplete({
        source: countries
      });
    });
 $(function() {
  
      var name = ["<img id='ppp' src='you pic sorce'>type in your name here"];
      $("#user_name").autocomplete({
        source: name
      });
    });