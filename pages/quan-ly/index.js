import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import Link from "next/link";
import { logout } from "../../store/actions/auth.actions";

const AdminIndex = () => {

    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout({
            token: auth.token
        }))
        Router.push('/')
    }

    return (
        <div class="container-scroller">
    <link rel="stylesheet" href="/skydash_admin/feather.css"/>
  <link rel="stylesheet" href="/skydash_admin/themify-icons.css"/>
  <link rel="stylesheet" href="/skydash_admin/vendor.bundle.base.css"/>
  
  
  <link rel="stylesheet" href="/skydash_admin/dataTables.bootstrap4.css"/>
  <link rel="stylesheet" href="/skydash_admin/themify-icons.css"/>
  <link rel="stylesheet" type="text/css" href="/skydash_admin/select.dataTables.min.css"/>
  
  
  <link rel="stylesheet" href="/skydash_admin/style.css"/>
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link href="/"><a class="navbar-brand brand-logo mr-5" ><img src="/skydash_admin/logo.png" class="mr-2" alt="logo" /></a></Link>
        <Link href="/"><a class="navbar-brand brand-logo-mini" ><img src="/skydash_admin/logo-mini.png" alt="logo" /></a></Link>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        
        
        <ul class="navbar-nav navbar-nav-right">
          
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle"  data-toggle="dropdown" id="profileDropdown">
              <img src="/skydash_admin/face28.jpg" alt="profile" />
            </a>
            
          </li>
          <li class="nav-item nav-settings d-none d-lg-flex">
            
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="container-fluid page-body-wrapper">
      
      <div class="theme-setting-wrapper">
        
        <div id="theme-settings" class="settings-panel">
          <i class="settings-close ti-close"></i>
          <p class="settings-heading">SIDEBAR SKINS</p>
          <div class="sidebar-bg-options selected" id="sidebar-light-theme"><div class="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
          <div class="sidebar-bg-options" id="sidebar-dark-theme"><div class="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
          <p class="settings-heading mt-2">HEADER SKINS</p>
          <div class="color-tiles mx-0 px-4">
            <div class="tiles success"></div>
            <div class="tiles warning"></div>
            <div class="tiles danger"></div>
            <div class="tiles info"></div>
            <div class="tiles dark"></div>
            <div class="tiles default"></div>
          </div>
        </div>
      </div>
      <div id="right-sidebar" class="settings-panel">
        <i class="settings-close ti-close"></i>
        <ul class="nav nav-tabs border-top" id="setting-panel" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="todo-tab" data-toggle="tab"  role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="chats-tab" data-toggle="tab"  role="tab" aria-controls="chats-section">CHATS</a>
          </li>
        </ul>
        <div class="tab-content" id="setting-content">
          <div class="tab-pane fade show active scroll-wrapper ps ps--active-y" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
            <div class="add-items d-flex px-3 mb-0">
              <form class="form w-100">
                <div class="form-group d-flex">
                  <input type="text" class="form-control todo-list-input" placeholder="Add To-do" />
                  <button type="submit" class="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                </div>
              </form>
            </div>
            <div class="list-wrapper px-3">
              <ul class="d-flex flex-column-reverse todo-list">
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" />
                      Team review meeting at 3.00 PM
                    <i class="input-helper"></i><i class="input-helper"></i><i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" />
                      Prepare for presentation
                    <i class="input-helper"></i><i class="input-helper"></i><i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" />
                      Resolve all the low priority tickets due today
                    <i class="input-helper"></i><i class="input-helper"></i><i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li class="Xong">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" checked="" />
                      Schedule meeting for next week
                    <i class="input-helper"></i><i class="input-helper"></i><i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li class="Xong">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" checked="" />
                      Project review
                    <i class="input-helper"></i><i class="input-helper"></i><i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
              </ul>
            </div>
            <h4 class="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
            <div class="events pt-4 px-3">
              <div class="wrapper d-flex mb-2">
                <i class="ti-control-record text-primary mr-2"></i>
                <span>Feb 11 2018</span>
              </div>
              <p class="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
              <p class="text-gray mb-0">The total number of sessions</p>
            </div>
            <div class="events pt-4 px-3">
              <div class="wrapper d-flex mb-2">
                <i class="ti-control-record text-primary mr-2"></i>
                <span>Feb 7 2018</span>
              </div>
              <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
              <p class="text-gray mb-0 ">Call Sarah Graves</p>
            </div>
          <div class="ps__rail-x" style={{left: 0, bottom: 0}}><div class="ps__thumb-x" tabindex="0" style={{left: 0, width: 0}}></div></div><div class="ps__rail-y" style={{top: 0, right: 0}}><div class="ps__thumb-y" tabindex="0" style={{top: 0, height: 0}}></div></div><div class="ps__rail-x" style={{left: 0, bottom: 0}}><div class="ps__thumb-x" tabindex="0" style={{left: 0, width: 0}}></div></div><div class="ps__rail-y" style={{top: 0, right: 0}}><div class="ps__thumb-y" tabindex="0" style={{top: 0, height: 0}}></div></div><div class="ps__rail-x" style={{left: 0, bottom: 0}}><div class="ps__thumb-x" tabindex="0" style={{left: 0, width: 0}}></div></div><div class="ps__rail-y" style={{top: 0, right: 0, height: 561}}><div class="ps__thumb-y" tabindex="0" style={{top: 0, height: 355}}></div></div></div>
          
          <div class="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
            <div class="d-flex align-items-center justify-content-between border-bottom">
              <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
              <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
            </div>
            <ul class="chat-list">
              <li class="list active">
                <div class="profile"><img src="/skydash_admin/face1.jpg" alt="image" /><span class="online"></span></div>
                <div class="info">
                  <p>Thomas Douglas</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">19 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/skydash_admin/face2.jpg" alt="image" /><span class="offline"></span></div>
                <div class="info">
                  <div class="wrapper d-flex">
                    <p>Catherine</p>
                  </div>
                  <p>Away</p>
                </div>
                <div class="badge badge-success badge-pill my-auto mx-2">4</div>
                <small class="text-muted my-auto">23 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/skydash_admin/face3.jpg" alt="image"/><span class="online"></span></div>
                <div class="info">
                  <p>Daniel Russell</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">14 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/skydash_admin/face4.jpg" alt="image"/><span class="offline"></span></div>
                <div class="info">
                  <p>James Richardson</p>
                  <p>Away</p>
                </div>
                <small class="text-muted my-auto">2 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/skydash_admin/face5.jpg" alt="image"/><span class="online"></span></div>
                <div class="info">
                  <p>Madeline Kennedy</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">5 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/skydash_admin/face6.jpg" alt="image"/><span class="online"></span></div>
                <div class="info">
                  <p>Sarah Graves</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">47 min</small>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item active">
            <a class="nav-link" >
              <span class="menu-title">Dashboard</span>
            </a>
          </li>    
          <li class="nav-item">
            <a class="nav-link" >
              <span class="menu-title">Sản phẩm</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
              <span class="menu-title">Khuyến mãi</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
              <span class="menu-title">Khách hàng</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
              <span class="menu-title">Đơn hàng</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
              <span class="menu-title">Bài viết</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
              <span class="menu-title">Báo cáo</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
              <span class="menu-title">Tùy chỉnh</span>
            </a>
          </li>
          <li class="nav-item" onClick={handleLogout}>
            <a class="nav-link" >
              <span class="menu-title">Đăng xuất</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="font-weight-bold">Chào Quân</h3>
                  <h6 class="font-weight-normal mb-0">Tất cả các hệ thống đang hoạt động trơn tru! Bạn có <span class="text-primary">3 thông báo mới chưa đọc!</span></h6>
                </div>
                <div class="col-12 col-xl-4">
                 <div class="justify-content-end d-flex">
                  <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <button class="btn btn-sm btn-light bg-white" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Hôm nay ngày (25/10/2021)
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                      <a class="dropdown-item" >January - March</a>
                      <a class="dropdown-item" >March - June</a>
                      <a class="dropdown-item" >June - August</a>
                      <a class="dropdown-item" >August - November</a>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card tale-bg">
                <div class="card-people mt-auto">
                  <img src="/skydash_admin/people.svg" alt="people" />
                  <div class="weather-info">
                    <div class="d-flex">
                      <div>
                        <h2 class="mb-0 font-weight-normal">30<sup>C</sup></h2>
                      </div>
                      <div class="ml-2">
                        <h4 class="location font-weight-normal">Hồ Chí Minh</h4>
                        <h6 class="font-weight-normal">Việt Nam</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin transparent">
              <div class="row">
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-tale">
                    <div class="card-body">
                      <p class="mb-4">Đơn hàng tuần này</p>
                      <p class="fs-30 mb-2">42</p>
                      <p>+10.00% (7 ngày)</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-dark-blue">
                    <div class="card-body">
                      <p class="mb-4">Tổng đơn tháng</p>
                      <p class="fs-30 mb-2">168</p>
                      <p>+22.00% (30 ngày)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div class="card card-light-blue">
                    <div class="card-body">
                      <p class="mb-4">Khách cũ</p>
                      <p class="fs-30 mb-2">75</p>
                      <p>+5.00% (30 ngày)</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 stretch-card transparent">
                  <div class="card card-light-danger">
                    <div class="card-body">
                      <p class="mb-4">Khách mới</p>
                      <p class="fs-30 mb-2">91</p>
                      <p>+12.22% (30 ngày)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                  <p class="card-title">Chi tiết đơn hàng</p>
                  <div class="d-flex flex-wrap mb-5">
                    <div class="mr-5 mt-3">
                      <p class="text-muted">Tổng tiền</p>
                      <h3 class="text-primary fs-30 font-weight-medium">45,3tr</h3>
                    </div>
                    <div class="mr-5 mt-3">
                      <p class="text-muted">Tổng đơn</p>
                      <h3 class="text-primary fs-30 font-weight-medium">1.989</h3>
                    </div>
                  </div>
                  <canvas id="order-chart" style={{display: "block", width: 378, height: 188,}} width="378" height="188" class="chartjs-render-monitor"></canvas>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                 <div class="d-flex justify-content-between">
                  <p class="card-title">Báo cáo bán hàng</p>
                  <a  class="text-info">Xem tất cả</a>
                 </div>
                  <div id="sales-legend" class="chartjs-legend mt-4 mb-2"><ul class="1-legend"><li><span style={{backgroundColor: "rgb(152, 189, 255)"}}></span>Khách hàng mới</li><li><span style={{backgroundColor: "rgb(75, 73, 172)"}}></span>Khách hàng cũ</li></ul></div>
                  <canvas id="sales-chart" width="378" height="188" style={{display: "block", width: 378, height: 188}} class="chartjs-render-monitor"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card position-relative">
                <div class="card-body">
                  <div id="detailedReports" class="carousel slide detailed-report-carousel position-static pt-2" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                            <div class="ml-xl-4 mt-3">
                            <p class="card-title">Chi tiết báo cáo</p>
                              <h1 class="text-primary">32,5tr</h1>
                              <h3 class="font-weight-500 mb-xl-4 text-primary">Hồ Chí Minh</h3>
                            </div>  
                            </div>
                          <div class="col-md-12 col-xl-9">
                            <div class="row">
                              <div class="col-md-6 border-right">
                                <div class="table-responsive mb-3 mb-md-0 mt-3">
                                  <table class="table table-borderless report-table">
                                    <tbody><tr>
                                      <td class="text-muted">Quận 9</td>
                                      <td class="w-100 px-0">
                                        <div class="progress progress-md mx-4">
                                          <div class="progress-bar bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td><h5 class="font-weight-bold mb-0">7tr</h5></td>
                                    </tr>
                                    <tr>
                                      <td class="text-muted">Thủ Đức</td>
                                      <td class="w-100 px-0">
                                        <div class="progress progress-md mx-4">
                                          <div class="progress-bar bg-warning" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td><h5 class="font-weight-bold mb-0">5tr</h5></td>
                                    </tr>
                                    <tr>
                                      <td class="text-muted">Quận 12</td>
                                      <td class="w-100 px-0">
                                        <div class="progress progress-md mx-4">
                                          <div class="progress-bar bg-danger" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td><h5 class="font-weight-bold mb-0">9tr</h5></td>
                                    </tr>
                                    <tr>
                                      <td class="text-muted">Quận 3</td>
                                      <td class="w-100 px-0">
                                        <div class="progress progress-md mx-4">
                                          <div class="progress-bar bg-info" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td><h5 class="font-weight-bold mb-0">6tr</h5></td>
                                    </tr>
                                    <tr>
                                      <td class="text-muted">Quận 7</td>
                                      <td class="w-100 px-0">
                                        <div class="progress progress-md mx-4">
                                          <div class="progress-bar bg-primary" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td><h5 class="font-weight-bold mb-0">5tr</h5></td>
                                    </tr>
                                    <tr>
                                      <td class="text-muted">Quận 8</td>
                                      <td class="w-100 px-0">
                                        <div class="progress progress-md mx-4">
                                          <div class="progress-bar bg-danger" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td><h5 class="font-weight-bold mb-0">8tr</h5></td>
                                    </tr>
                                  </tbody></table>
                                </div>
                              </div>
                              <div class="col-md-6 mt-3"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                                <canvas id="south-america-chart" height="198" class="chartjs-render-monitor" style={{display: "block", width: 397, height: 198}} width="397"></canvas>
                                <div id="south-america-legend"><div class="report-chart"><div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style={{width: 20, height: 20, borderRadius: "50%", backgroundColor: "#4B49AC"}}></div><p class="mb-0">Khách hàng mới</p></div><p class="mb-0">10.8tr</p></div><div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style={{width:20, height:20, borderRadius: "50%", backgroundColor: "#FFC100"}}></div><p class="mb-0">Khách hàng cũ</p></div><p class="mb-0">11.2tr</p></div><div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style={{width: 20, height:20, borderRadius: "50%", backgroundColor: "#248AFD"}}></div><p class="mb-0">Đối tác</p></div><p class="mb-0">9.5tr</p></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev"  role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next"  role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Đơn hàng gần đây</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Sản phẩm</th>
                          <th>Giá</th>
                          <th>Ngày</th>
                          <th>Tình trạng</th>
                        </tr>  
                      </thead>
                      <tbody>
                        <tr>
                          <td>Áo thun Summber Vibes</td>
                          <td class="font-weight-bold">139,000đ</td>
                          <td>24/10/2021</td>
                          <td class="font-weight-medium"><div class="badge badge-success">Xong</div></td>
                        </tr>
                        <tr>
                          <td>Áo khoác thể thao nam Coolmate X8</td>
                          <td class="font-weight-bold">299,000đ</td>
                          <td>24/10/2021</td>
                          <td class="font-weight-medium"><div class="badge badge-success">Xong</div></td>
                        </tr>
                        <tr>
                          <td>Quần jean T-Redx M39</td>
                          <td class="font-weight-bold">659,000đ</td>
                          <td>24/10/2021</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Đang giao</div></td>
                        </tr>
                        <tr>
                          <td>Giày Biti's Hunter Cam Đen 2021</td>
                          <td class="font-weight-bold">910,000đ</td>
                          <td>24/10/2021</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Đang giao</div></td>
                        </tr>
                        <tr>
                          <td>Áo thun trơn basics M09</td>
                          <td class="font-weight-bold">90,000đ</td>
                          <td>24/10/2021</td>
                          <td class="font-weight-medium"><div class="badge badge-danger">Hủy</div></td>
                        </tr>
                        <tr>
                          <td>Quần jeans đen nam V35</td>
                          <td class="font-weight-bold">250,000đ</td>
                          <td>23/10/2021</td>
                          <td class="font-weight-medium"><div class="badge badge-warning">Đang giao</div></td>
                        </tr>
                        <tr>
                          <td>Áo khoác nỉ có mũ X-Pro</td>
                          <td class="font-weight-bold">180,000đ</td>
                          <td>23/10/2021</td>
                          <td class="font-weight-medium"><div class="badge badge-success">Xong</div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          
        </div>
        
        
        
        
      </div>
      
    </div>
    <script src="/skydash_admin/vendor.bundle.base.js.download"></script>
  
  
  <script src="/skydash_admin/Chart.min.js.download"></script>
  <script src="/skydash_admin/jquery.dataTables.js.download"></script>
  <script src="/skydash_admin/dataTables.bootstrap4.js.download"></script>
  <script src="/skydash_admin/dataTables.select.min.js.download"></script>

  
  
  <script src="/skydash_admin/off-canvas.js.download"></script>
  <script src="/skydash_admin/hoverable-collapse.js.download"></script>
  <script src="/skydash_admin/template.js.download"></script>
  <script src="/skydash_admin/settings.js.download"></script>
  <script src="/skydash_admin/todolist.js.download"></script>
  
  
  <script src="/skydash_admin/dashboard.js.download"></script>
  <script src="/skydash_admin/Chart.roundedBarCharts.js.download"></script>
  </div>
  

    );
}

export default AdminIndex;
