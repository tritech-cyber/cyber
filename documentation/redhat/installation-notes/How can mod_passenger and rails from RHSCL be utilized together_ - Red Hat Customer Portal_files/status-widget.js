define(["jquery"],function(e){var t={"Partially Degraded Service":"Partial Service"},a={critical:"shape-red",major:"shape-orange",minor:"shape-yellow",none:"shape-dash-lime"};new StatusPage.page({page:"dn6mqn7xvzz3"}).summary({success:function(s){e(".status-page-widget").removeAttr("hidden");var i=t[s.status.description]||s.status.description;e(".status-page-widget .status-description").text(i),e(".status-page-widget .status-dot").addClass(a[s.status.indicator])}})});
//# sourceMappingURL=status-widget.js.map