Fully animated portfolio app.

Folder Structure:

root/assets // images
root/json // json data
root/context // context

root/pages
// all pages, each page is broken down into components 
root/pages/Home // home page
root/pages/Projects // search all projects page
root/pages/Contact // contact page
root/pages/About // about page
root/pages/DynamicProjects // dynamic project view page
root/pages/PageNotFound // page not found page

root/components/PageComps
// All components for each page, organized
Home // organized inside
Projects // organized inside
Contact // organized inside
About // organized inside
DynamicProjects // organized inside

root/Router
root/Router/RouterComponent.js // Starting point for app, all routes go through here
// All commonly used components
root/Router/Header // absolute header at top of each page
root/Router/Footer // absolute footer at bottom of each page
root/Router/FixedScroller // fixed scroller + email icon for each page
root/Router/NeedDesigner // custom extra footer for home and about
root/Router/Menu // sliding menu component
root/Router/Loader // loading screen