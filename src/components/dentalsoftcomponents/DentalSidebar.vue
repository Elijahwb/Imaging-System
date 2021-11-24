<template>
  <div>
    <!-- <div class="nav-header">
      <h2 class="web-logo">DentalSoft</h2>
      <h2 class="mob-logo">DS</h2>

      <div class="nav-control">
        <div class="hamburger" style="float: left; color: black">
          <span class="line"></span><span class="line"></span
          ><span class="line"></span>
        </div>
      </div>

    </div> -->
    <div class="deznav border text-center">
      <h2 class="web-logo">DS</h2>
      <h2 class="mob-logo">DS</h2>
      <div class="deznav-scroll">
        <ul class="metismenu" id="menu">
          <li>
            <router-link to="/dashboard">
              <div>
                <!-- <img src='@/assets/images/icons/home.svg' alt="my-logo" class="menu-small" /> -->
                <i class="fa fa-th-large fa-2x" aria-hidden="true"></i>
              </div>

              <span class="nav-text">Dashboard</span>
            </router-link>
          </li>

          <li>
            <router-link
              to="/frontoffice"
              :class="{ 'custom-active': isFront }"
            >
              <div>
                <!-- <img src="@/assets/images/icons/office.svg" alt="my-logo" class="menu-small" /> -->
                <i class="fa fa-building-o fa-2x" aria-hidden="true"></i>
              </div>

              <span class="nav-text">Front Office</span>
            </router-link>
          </li>
          <li>
            <a
              id="icon"
              href="/doctor/patients"
              class="has-arrow ai-icon"
              aria-expanded="false"
            >
              <div>
                <!-- <img
                  src="@/assets/images/icons/people.svg"
                  alt="my-logo"
                  class="menu-small"
                  height="25"
                /> -->
                <i class="fa fa-users fa-2x" aria-hidden="true"></i>
              </div>
              <span class="nav-text">Patients</span>
            </a>
          </li>

          <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
              href="/appointments"
              aria-expanded="false"
            >
              <div>
                <!-- <img
                  src="@/assets/images/icons/cc.svg"
                  alt="my-logo"
                  class="menu-small"
                /> -->
                <i class="fas fa-calendar-check fa-2x" aria-hidden="true"></i>
              </div>

              <span class="nav-text">Appointments</span>
            </a>
          </li>
          <li>
            <router-link to="/billing">
              <div>
                <!-- <img
                    src="@/assets/images/icons/pay.svg"
                    alt="my-logo"
                    class="menu-small"
                  /> -->
                <i
                  class="fa fa-credit-card fa-2x"
                  aria-hidden="true"
                  :class="{ 'custom-active': isBilling }"
                ></i>
              </div>

              <span class="nav-text" :class="{ 'custom-active': isBilling }"
                >Billing</span
              >
            </router-link>
          </li>

          <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
              href="#"
              aria-expanded="false"
            >
              <div>
                <!-- <img
                  src="@/assets/images/icons/repo.svg"
                  alt="my-logo"
                  class="menu-small"
                /> -->
                <i class="fas fa-chart-line fa-2x" aria-hidden="true"></i>
              </div>

              <span class="nav-text">Reporting</span>
            </a>
          </li>

          <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
              href="#"
              aria-expanded="false"
            >
              <div>
                <!-- <img
                  src="@/assets/images/icons/insure.svg"
                  alt="my-logo"
                  class="menu-small"
                /> -->
                <i class="fa fa-shield fa-2x" aria-hidden="true"></i>
              </div>

              <span class="nav-text">Insurance</span>
            </a>
          </li>
          <!--
           <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
                href="#"
              aria-expanded="false"
            >
              <div>
                <img
                  src="@/assets/images/icons/shop.svg"
                  alt="my-logo"
                  class="menu-small"
                />
              </div>

              <span class="nav-text">Shopping</span>
            </a>
          </li>

           <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
                href="#"
              aria-expanded="false"
            >
              <div>
                <img
                  src="@/assets/images/icons/hr.svg"
                  alt="my-logo"
                  class="menu-small"
                />
              </div>

              <span class="nav-text">HR & Payroll</span>
            </a>
          </li>

           <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
                href="#"
              aria-expanded="false"
            >
              <div>
                <img
                  src="@/assets/images/icons/accounts.svg"
                  alt="my-logo"
                  class="menu-small"
                />
              </div>

              <span class="nav-text">Accounts</span>
            </a>
          </li>

           <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
                href="#"
              aria-expanded="false"
            >
              <div>
                <img
                  src="@/assets/images/icons/inventory.svg"
                  alt="my-logo"
                  class="menu-small"
                />
              </div>

              <span class="nav-text">Inventory</span>
            </a>
          </li>

           <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
               href="#"
              aria-expanded="false"
            >
              <div>
                <img
                  src="@/assets/images/icons/intelligence.svg"
                  alt="my-logo"
                  class="menu-small"
                />
              </div>

              <span class="nav-text">Business Intelligence</span>
            </a>
          </li>

          <li>
            <a
              id="icon"
              class="has-arrow ai-icon"
               href="#"
              aria-expanded="false"
            >
              <div>
                <img src="@/assets/images/icons/settings.svg" alt="my-logo" class="menu-small" />
              </div>

              <span class="nav-text">Configuration</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    isFront() {
      return this.$router.currentRoute.value.name === "Office New Patient";
    },
    isBilling() {
      return this.$router.currentRoute.value.fullPath.indexOf("billing") >= 0;
    },
  },
};
</script>

<style>
.custom-active {
  color: #ff6f00 !important;
}
.deznav {
  position: fixed !important;
  text-align: center;
  left: -10px;
  width: 140px !important;
}

.menu-small {
  width: 30px !important;
  height: 30px !important;
  color: #9d9d9d;
}

.deznav .metismenu li i {
  display: block !important;
  margin: auto;
}

.deznav .metismenu li > a {
  padding: 1.5rem 1.625rem 1.5rem 1.5rem;
  text-align: center !important;
}

.deznav .metismenu li:hover > a {
  color: #ff6f00 !important;
  background: linear-gradient(
    to right,
    #e0e0e4 0%,
    rgba(125, 185, 232, 0) 100%
  );
}

.router-link-active.custom-active span,
.router-link-active.custom-active i {
  color: #ff6f00 !important;
}
.router-link-active i {
  color: #ff782e !important;
}
.router-link-active {
  color: #ff782e !important;
}
.router-link:hover {
  color: #ff782e !important;
}
.web-logo {
  color: #ff782e !important;
  font-weight: bold;
  margin-top: -80px;
}
i {
  color: #07091d !important;
}
li i:hover {
  color: #ff782e !important;
}
</style>
