// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import '../resources/css/theme-default.css';

export default class Home extends Component {
  render() {
    return (
      <div className="page-container">
              {/* START PAGE SIDEBAR */}
              <div className="page-sidebar">
                {/* START X-NAVIGATION */}
                <ul className="x-navigation">
                  <li className="xn-logo">
                    <a href="index.html">Joli Admin</a>
                    <a href="#" className="x-navigation-control" />
                  </li>
                  <li className="xn-profile">
                    <a href="#" className="profile-mini">
                      <img src="assets/images/users/avatar.jpg" alt="John Doe" />
                    </a>
                    <div className="profile">
                      <div className="profile-image">
                        <img src="assets/images/users/avatar.jpg" alt="John Doe" />
                      </div>
                      <div className="profile-data">
                        <div className="profile-data-name">John Doe</div>
                        <div className="profile-data-title">Web Developer/Designer</div>
                      </div>
                      <div className="profile-controls">
                        <a href="pages-profile.html" className="profile-control-left"><span className="fa fa-info" /></a>
                        <a href="pages-messages.html" className="profile-control-right"><span className="fa fa-envelope" /></a>
                      </div>
                    </div>
                  </li>
                  <li className="xn-title">Navigation</li>
                  <li className="active">
                    <a href="index.html"><span className="fa fa-desktop" /> <span className="xn-text">Dashboard</span></a>
                  </li>
                  <li className="xn-openable">
                    <a href="#"><span className="fa fa-files-o" /> <span className="xn-text">Pages</span></a>
                    <ul>
                      <li><a href="pages-gallery.html"><span className="fa fa-image" /> Gallery</a></li>
                      <li><a href="pages-profile.html"><span className="fa fa-user" /> Profile</a></li>
                      <li><a href="pages-address-book.html"><span className="fa fa-users" /> Address Book</a></li>
                      <li className="xn-openable">
                        <a href="#"><span className="fa fa-clock-o" /> Timeline</a>
                        <ul>
                          <li><a href="pages-timeline.html"><span className="fa fa-align-center" /> Default</a></li>
                          <li><a href="pages-timeline-simple.html"><span className="fa fa-align-justify" /> Full Width</a></li>
                        </ul>
                      </li>
                      <li className="xn-openable">
                        <a href="#"><span className="fa fa-envelope" /> Mailbox</a>
                        <ul>
                          <li><a href="pages-mailbox-inbox.html"><span className="fa fa-inbox" /> Inbox</a></li>
                          <li><a href="pages-mailbox-message.html"><span className="fa fa-file-text" /> Message</a></li>
                          <li><a href="pages-mailbox-compose.html"><span className="fa fa-pencil" /> Compose</a></li>
                        </ul>
                      </li>
                      <li><a href="pages-messages.html"><span className="fa fa-comments" /> Messages</a></li>
                      <li><a href="pages-calendar.html"><span className="fa fa-calendar" /> Calendar</a></li>
                      <li><a href="pages-tasks.html"><span className="fa fa-edit" /> Tasks</a></li>
                      <li><a href="pages-content-table.html"><span className="fa fa-columns" /> Content Table</a></li>
                      <li><a href="pages-faq.html"><span className="fa fa-question-circle" /> FAQ</a></li>
                      <li><a href="pages-search.html"><span className="fa fa-search" /> Search</a></li>
                      <li className="xn-openable">
                        <a href="#"><span className="fa fa-file" /> Blog</a>
                        <ul>
                          <li><a href="pages-blog-list.html"><span className="fa fa-copy" /> List of Posts</a></li>
                          <li><a href="pages-blog-post.html"><span className="fa fa-file-o" />Single Post</a></li>
                        </ul>
                      </li>
                      <li className="xn-openable">
                        <a href="#"><span className="fa fa-sign-in" /> Login</a>
                        <ul>
                          <li><a href="pages-login.html">App Login</a></li>
                          <li><a href="pages-login-website.html">Website Login</a></li>
                          <li><a href="pages-login-website-light.html"> Website Login Light</a></li>
                        </ul>
                      </li>
                      <li className="xn-openable">
                        <a href="#"><span className="fa fa-warning" /> Error Pages</a>
                        <ul>
                          <li><a href="pages-error-404.html">Error 404 Sample 1</a></li>
                          <li><a href="pages-error-404-2.html">Error 404 Sample 2</a></li>
                          <li><a href="pages-error-500.html"> Error 500</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="xn-openable">
                    <a href="#"><span className="fa fa-file-text-o" /> <span className="xn-text">Layouts</span></a>
                    <ul>
                      <li><a href="layout-boxed.html">Boxed</a></li>
                      <li><a href="layout-nav-toggled.html">Navigation Toggled</a></li>
                      <li><a href="layout-nav-top.html">Navigation Top</a></li>
                      <li><a href="layout-nav-right.html">Navigation Right</a></li>
                      <li><a href="layout-nav-top-fixed.html">Top Navigation Fixed</a></li>
                      <li><a href="layout-nav-custom.html">Custom Navigation</a></li>
                      <li><a href="layout-frame-left.html">Frame Left Column</a></li>
                      <li><a href="layout-frame-right.html">Frame Right Column</a></li>
                      <li><a href="layout-search-left.html">Search Left Side</a></li>
                      <li><a href="blank.html">Blank Page</a></li>
                    </ul>
                  </li>
                  <li className="xn-title">Components</li>
                  <li className="xn-openable">
                    <a href="#"><span className="fa fa-cogs" /> <span className="xn-text">UI Kits</span></a>
                    <ul>
                      <li><a href="ui-widgets.html"><span className="fa fa-heart" /> Widgets</a></li>
                      <li><a href="ui-elements.html"><span className="fa fa-cogs" /> Elements</a></li>
                      <li><a href="ui-buttons.html"><span className="fa fa-square-o" /> Buttons</a></li>
                      <li><a href="ui-panels.html"><span className="fa fa-pencil-square-o" /> Panels</a></li>
                      <li><a href="ui-icons.html"><span className="fa fa-magic" /> Icons</a><div className="informer informer-warning">+679</div></li>
                      <li><a href="ui-typography.html"><span className="fa fa-pencil" /> Typography</a></li>
                      <li><a href="ui-portlet.html"><span className="fa fa-th" /> Portlet</a></li>
                      <li><a href="ui-sliders.html"><span className="fa fa-arrows-h" /> Sliders</a></li>
                      <li><a href="ui-alerts-popups.html"><span className="fa fa-warning" /> Alerts &amp; Popups</a></li>
                      <li><a href="ui-lists.html"><span className="fa fa-list-ul" /> Lists</a></li>
                      <li><a href="ui-tour.html"><span className="fa fa-random" /> Tour</a></li>
                    </ul>
                  </li>
                  <li className="xn-openable">
                    <a href="#"><span className="fa fa-pencil" /> <span className="xn-text">Forms</span></a>
                    <ul>
                      <li>
                        <a href="form-layouts-two-column.html"><span className="fa fa-tasks" /> Form Layouts</a>
                        <div className="informer informer-danger">New</div>
                        <ul>
                          <li><a href="form-layouts-one-column.html"><span className="fa fa-align-justify" /> One Column</a></li>
                          <li><a href="form-layouts-two-column.html"><span className="fa fa-th-large" /> Two Column</a></li>
                          <li><a href="form-layouts-tabbed.html"><span className="fa fa-table" /> Tabbed</a></li>
                          <li><a href="form-layouts-separated.html"><span className="fa fa-th-list" /> Separated Rows</a></li>
                        </ul>
                      </li>
                      <li><a href="form-elements.html"><span className="fa fa-file-text-o" /> Elements</a></li>
                      <li><a href="form-validation.html"><span className="fa fa-list-alt" /> Validation</a></li>
                      <li><a href="form-wizards.html"><span className="fa fa-arrow-right" /> Wizards</a></li>
                      <li><a href="form-editors.html"><span className="fa fa-text-width" /> WYSIWYG Editors</a></li>
                      <li><a href="form-file-handling.html"><span className="fa fa-floppy-o" /> File Handling</a></li>
                    </ul>
                  </li>
                  <li className="xn-openable">
                    <a href="tables.html"><span className="fa fa-table" /> <span className="xn-text">Tables</span></a>
                    <ul>
                      <li><a href="table-basic.html"><span className="fa fa-align-justify" /> Basic</a></li>
                      <li><a href="table-datatables.html"><span className="fa fa-sort-alpha-desc" /> Data Tables</a></li>
                      <li><a href="table-export.html"><span className="fa fa-download" /> Export Tables</a></li>
                    </ul>
                  </li>
                  <li className="xn-openable">
                    <a href="#"><span className="fa fa-bar-chart-o" /> <span className="xn-text">Charts</span></a>
                    <ul>
                      <li><a href="charts-morris.html"><span className="xn-text">Morris</span></a></li>
                      <li><a href="charts-nvd3.html"><span className="xn-text">NVD3</span></a></li>
                      <li><a href="charts-rickshaw.html"><span className="xn-text">Rickshaw</span></a></li>
                      <li><a href="charts-other.html"><span className="xn-text">Other</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="maps.html"><span className="fa fa-map-marker" /> <span className="xn-text">Maps</span></a>
                  </li>
                  <li className="xn-openable">
                    <a href="#"><span className="fa fa-sitemap" /> <span className="xn-text">Navigation Levels</span></a>
                    <ul>
                      <li className="xn-openable">
                        <a href="#">Second Level</a>
                        <ul>
                          <li className="xn-openable">
                            <a href="#">Third Level</a>
                            <ul>
                              <li className="xn-openable">
                                <a href="#">Fourth Level</a>
                                <ul>
                                  <li><a href="#">Fifth Level</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* END X-NAVIGATION */}
              </div>
              {/* END PAGE SIDEBAR */}
              {/* PAGE CONTENT */}
              <div className="page-content">
                {/* START X-NAVIGATION VERTICAL */}
                <ul className="x-navigation x-navigation-horizontal x-navigation-panel">
                  {/* TOGGLE NAVIGATION */}
                  <li className="xn-icon-button">
                    <a href="#" className="x-navigation-minimize"><span className="fa fa-dedent" /></a>
                  </li>
                  {/* END TOGGLE NAVIGATION */}
                  {/* SEARCH */}
                  <li className="xn-search">
                    <form role="form">
                      <input type="text" name="search" placeholder="Search..." />
                    </form>
                  </li>
                  {/* END SEARCH */}
                  {/* SIGN OUT */}
                  <li className="xn-icon-button pull-right">
                    <a href="#" className="mb-control" data-box="#mb-signout"><span className="fa fa-sign-out" /></a>
                  </li>
                  {/* END SIGN OUT */}
                  {/* MESSAGES */}
                  <li className="xn-icon-button pull-right">
                    <a href="#"><span className="fa fa-comments" /></a>
                    <div className="informer informer-danger">4</div>
                    <div className="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
                      <div className="panel-heading">
                        <h3 className="panel-title"><span className="fa fa-comments" /> Messages</h3>
                        <div className="pull-right">
                          <span className="label label-danger">4 new</span>
                        </div>
                      </div>
                      <div className="panel-body list-group list-group-contacts scroll" style={{height: 200}}>
                        <a href="#" className="list-group-item">
                          <div className="list-group-status status-online" />
                          <img src="assets/images/users/user2.jpg" className="pull-left" alt="John Doe" />
                          <span className="contacts-title">John Doe</span>
                          <p>Praesent placerat tellus id augue condimentum</p>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="list-group-status status-away" />
                          <img src="assets/images/users/user.jpg" className="pull-left" alt="Dmitry Ivaniuk" />
                          <span className="contacts-title">Dmitry Ivaniuk</span>
                          <p>Donec risus sapien, sagittis et magna quis</p>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="list-group-status status-away" />
                          <img src="assets/images/users/user3.jpg" className="pull-left" alt="Nadia Ali" />
                          <span className="contacts-title">Nadia Ali</span>
                          <p>Mauris vel eros ut nunc rhoncus cursus sed</p>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="list-group-status status-offline" />
                          <img src="assets/images/users/user6.jpg" className="pull-left" alt="Darth Vader" />
                          <span className="contacts-title">Darth Vader</span>
                          <p>I want my money back!</p>
                        </a>
                      </div>
                      <div className="panel-footer text-center">
                        <a href="pages-messages.html">Show all messages</a>
                      </div>
                    </div>
                  </li>
                  {/* END MESSAGES */}
                  {/* TASKS */}
                  <li className="xn-icon-button pull-right">
                    <a href="#"><span className="fa fa-tasks" /></a>
                    <div className="informer informer-warning">3</div>
                    <div className="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
                      <div className="panel-heading">
                        <h3 className="panel-title"><span className="fa fa-tasks" /> Tasks</h3>
                        <div className="pull-right">
                          <span className="label label-warning">3 active</span>
                        </div>
                      </div>
                      <div className="panel-body list-group scroll" style={{height: 200}}>
                        <a className="list-group-item" href="#">
                          <strong>Phasellus augue arcu, elementum</strong>
                          <div className="progress progress-small progress-striped active">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
                          </div>
                          <small className="text-muted">John Doe, 25 Sep 2014 / 50%</small>
                        </a>
                        <a className="list-group-item" href="#">
                          <strong>Aenean ac cursus</strong>
                          <div className="progress progress-small progress-striped active">
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>80%</div>
                          </div>
                          <small className="text-muted">Dmitry Ivaniuk, 24 Sep 2014 / 80%</small>
                        </a>
                        <a className="list-group-item" href="#">
                          <strong>Lorem ipsum dolor</strong>
                          <div className="progress progress-small progress-striped active">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>95%</div>
                          </div>
                          <small className="text-muted">John Doe, 23 Sep 2014 / 95%</small>
                        </a>
                        <a className="list-group-item" href="#">
                          <strong>Cras suscipit ac quam at tincidunt.</strong>
                          <div className="progress progress-small">
                            <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>100%</div>
                          </div>
                          <small className="text-muted">John Doe, 21 Sep 2014 /</small><small className="text-success"> Done</small>
                        </a>
                      </div>
                      <div className="panel-footer text-center">
                        <a href="pages-tasks.html">Show all tasks</a>
                      </div>
                    </div>
                  </li>
                  {/* END TASKS */}
                </ul>
                {/* END X-NAVIGATION VERTICAL */}
                {/* START BREADCRUMB */}
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Dashboard</li>
                </ul>
                {/* END BREADCRUMB */}
                {/* PAGE CONTENT WRAPPER */}
                <div className="page-content-wrap">
                  {/* START WIDGETS */}
                  <div className="row">
                    <div className="col-md-3">
                      {/* START WIDGET SLIDER */}
                      <div className="widget widget-default widget-carousel">
                        <div className="owl-carousel" id="owl-example">
                          <div>
                            <div className="widget-title">Total Visitors</div>
                            <div className="widget-subtitle">27/08/2014 15:23</div>
                            <div className="widget-int">3,548</div>
                          </div>
                          <div>
                            <div className="widget-title">Returned</div>
                            <div className="widget-subtitle">Visitors</div>
                            <div className="widget-int">1,695</div>
                          </div>
                          <div>
                            <div className="widget-title">New</div>
                            <div className="widget-subtitle">Visitors</div>
                            <div className="widget-int">1,977</div>
                          </div>
                        </div>
                        <div className="widget-controls">
                          <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></a>
                        </div>
                      </div>
                      {/* END WIDGET SLIDER */}
                    </div>
                    <div className="col-md-3">
                      {/* START WIDGET MESSAGES */}
                      <div className="widget widget-default widget-item-icon" onclick="location.href='pages-messages.html';">
                        <div className="widget-item-left">
                          <span className="fa fa-envelope" />
                        </div>
                        <div className="widget-data">
                          <div className="widget-int num-count">48</div>
                          <div className="widget-title">New messages</div>
                          <div className="widget-subtitle">In your mailbox</div>
                        </div>
                        <div className="widget-controls">
                          <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></a>
                        </div>
                      </div>
                      {/* END WIDGET MESSAGES */}
                    </div>
                    <div className="col-md-3">
                      {/* START WIDGET REGISTRED */}
                      <div className="widget widget-default widget-item-icon" onclick="location.href='pages-address-book.html';">
                        <div className="widget-item-left">
                          <span className="fa fa-user" />
                        </div>
                        <div className="widget-data">
                          <div className="widget-int num-count">375</div>
                          <div className="widget-title">Registred users</div>
                          <div className="widget-subtitle">On your website</div>
                        </div>
                        <div className="widget-controls">
                          <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></a>
                        </div>
                      </div>
                      {/* END WIDGET REGISTRED */}
                    </div>
                    <div className="col-md-3">
                      {/* START WIDGET CLOCK */}
                      <div className="widget widget-info widget-padding-sm">
                        <div className="widget-big-int plugin-clock">00:00</div>
                        <div className="widget-subtitle plugin-date">Loading...</div>
                        <div className="widget-controls">
                          <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="left" title="Remove Widget"><span className="fa fa-times" /></a>
                        </div>
                        <div className="widget-buttons widget-c3">
                          <div className="col">
                            <a href="#"><span className="fa fa-clock-o" /></a>
                          </div>
                          <div className="col">
                            <a href="#"><span className="fa fa-bell" /></a>
                          </div>
                          <div className="col">
                            <a href="#"><span className="fa fa-calendar" /></a>
                          </div>
                        </div>
                      </div>
                      {/* END WIDGET CLOCK */}
                    </div>
                  </div>
                  {/* END WIDGETS */}
                  <div className="row">
                    <div className="col-md-4">
                      {/* START USERS ACTIVITY BLOCK */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title-box">
                            <h3>Users Activity</h3>
                            <span>Users vs returning</span>
                          </div>
                          <ul className="panel-controls" style={{marginTop: 2}}>
                            <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                            <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>
                              <ul className="dropdown-menu">
                                <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                                <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="panel-body padding-0">
                          <div className="chart-holder" id="dashboard-bar-1" style={{height: 200}} />
                        </div>
                      </div>
                      {/* END USERS ACTIVITY BLOCK */}
                    </div>
                    <div className="col-md-4">
                      {/* START VISITORS BLOCK */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title-box">
                            <h3>Visitors</h3>
                            <span>Visitors (last month)</span>
                          </div>
                          <ul className="panel-controls" style={{marginTop: 2}}>
                            <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                            <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>
                              <ul className="dropdown-menu">
                                <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                                <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="panel-body padding-0">
                          <div className="chart-holder" id="dashboard-donut-1" style={{height: 200}} />
                        </div>
                      </div>
                      {/* END VISITORS BLOCK */}
                    </div>
                    <div className="col-md-4">
                      {/* START PROJECTS BLOCK */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title-box">
                            <h3>Projects</h3>
                            <span>Projects activity</span>
                          </div>
                          <ul className="panel-controls" style={{marginTop: 2}}>
                            <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                            <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>
                              <ul className="dropdown-menu">
                                <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                                <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="panel-body panel-body-table">
                          <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                              <thead>
                                <tr>
                                  <th width="50%">Project</th>
                                  <th width="20%">Status</th>
                                  <th width="30%">Activity</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><strong>Joli Admin</strong></td>
                                  <td><span className="label label-danger">Developing</span></td>
                                  <td>
                                    <div className="progress progress-small progress-striped active">
                                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>85%</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>Gemini</strong></td>
                                  <td><span className="label label-warning">Updating</span></td>
                                  <td>
                                    <div className="progress progress-small progress-striped active">
                                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>40%</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>Taurus</strong></td>
                                  <td><span className="label label-warning">Updating</span></td>
                                  <td>
                                    <div className="progress progress-small progress-striped active">
                                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '72%'}}>72%</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>Leo</strong></td>
                                  <td><span className="label label-success">Support</span></td>
                                  <td>
                                    <div className="progress progress-small progress-striped active">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>100%</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>Virgo</strong></td>
                                  <td><span className="label label-success">Support</span></td>
                                  <td>
                                    <div className="progress progress-small progress-striped active">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>100%</div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* END PROJECTS BLOCK */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      {/* START SALES BLOCK */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title-box">
                            <h3>Sales</h3>
                            <span>Sales activity by period you selected</span>
                          </div>
                          <ul className="panel-controls panel-controls-title">
                            <li>
                              <div id="reportrange" className="dtrange">
                                <span /><b className="caret" />
                              </div>
                            </li>
                            <li><a href="#" className="panel-fullscreen rounded"><span className="fa fa-expand" /></a></li>
                          </ul>
                        </div>
                        <div className="panel-body">
                          <div className="row stacked">
                            <div className="col-md-4">
                              <div className="progress-list">
                                <div className="pull-left"><strong>In Queue</strong></div>
                                <div className="pull-right">75%</div>
                                <div className="progress progress-small progress-striped active">
                                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>75%</div>
                                </div>
                              </div>
                              <div className="progress-list">
                                <div className="pull-left"><strong>Shipped Products</strong></div>
                                <div className="pull-right">450/500</div>
                                <div className="progress progress-small progress-striped active">
                                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
                                </div>
                              </div>
                              <div className="progress-list">
                                <div className="pull-left"><strong className="text-danger">Returned Products</strong></div>
                                <div className="pull-right">25/500</div>
                                <div className="progress progress-small progress-striped active">
                                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '5%'}}>5%</div>
                                </div>
                              </div>
                              <div className="progress-list">
                                <div className="pull-left"><strong className="text-warning">Progress Today</strong></div>
                                <div className="pull-right">75/150</div>
                                <div className="progress progress-small progress-striped active">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
                                </div>
                              </div>
                              <p><span className="fa fa-warning" /> Data update in end of each hour. You can update it manual by pressign update button</p>
                            </div>
                            <div className="col-md-8">
                              <div id="dashboard-map-seles" style={{width: '100%', height: 200}} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* END SALES BLOCK */}
                    </div>
                    <div className="common-modal modal fade" id="common-Modal1" tabIndex={-1} role="dialog" aria-hidden="true">
                      <div className="modal-content">
                        <ul className="list-inline item-details">
                          <li><a href="http://themifycloud.com/downloads/janux-premium-responsive-bootstrap-admin-dashboard-template/">Admin templates</a></li>
                          <li><a href="http://themescloud.org">Bootstrap themes</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      {/* START SALES & EVENTS BLOCK */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title-box">
                            <h3>Sales &amp; Event</h3>
                            <span>Event "Purchase Button"</span>
                          </div>
                          <ul className="panel-controls" style={{marginTop: 2}}>
                            <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                            <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>
                              <ul className="dropdown-menu">
                                <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                                <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="panel-body padding-0">
                          <div className="chart-holder" id="dashboard-line-1" style={{height: 200}} />
                        </div>
                      </div>
                      {/* END SALES & EVENTS BLOCK */}
                    </div>
                  </div>
                  {/* START DASHBOARD CHART */}
                  <div className="chart-holder" id="dashboard-area-1" style={{height: 200}} />
                  <div className="block-full-width">
                  </div>
                  {/* END DASHBOARD CHART */}
                </div>
                {/* END PAGE CONTENT WRAPPER */}
              </div>
              {/* END PAGE CONTENT */}
            </div>
    );
  }
}
