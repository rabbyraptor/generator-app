<template>
  <div>
    <h1 class="title">Tickets</h1>
    <v-ons-list>
      <v-ons-list-item expandable :expanded.sync="studentTickets.isExpanded">
        <div class="center" style="padding:12px;">
          <h3 style="font-size:24px;">Student Tickets</h3>
        </div>
        <div class="expandable-content tickets">
          <v-ons-list-item v-for="ticket in studentTickets.tickets" :key="ticket.type">
            <div class="ticket-grid">
              <div class="ticket-image" style="background-color:red"></div>
              <div class="ticket-content">
                <p style="font-weight:bold;" v-html="ticket.type" />
                <p v-html="ticket.price" />
                <p v-html="ticket.access" />
              </div>
            </div>
          </v-ons-list-item>
        </div>
      </v-ons-list-item>
      <v-ons-list-item expandable :expanded.sync="nonStudentTickets.isExpanded">
        <div class="center" style="padding:12px;">
          <h3 style="font-size:24px;">Non-Student Tickets</h3>
        </div>
        <div class="expandable-content">
          <v-ons-list-item v-for="ticket in nonStudentTickets.tickets" :key="ticket.type">
            <div class="ticket-grid">
              <div class="ticket-image" style="background-color:red"></div>
              <div class="ticket-content">
                <p style="font-weight:bold;" v-html="ticket.type" />
                <p v-html="ticket.price" />
                <p v-html="ticket.access" />
              </div>
            </div>
          </v-ons-list-item>
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <img class="odense-albani-logo" src="../assets/img/city_of_odense_albani.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentTickets: {
        tickets: [
        {
          type: "Ticket 1",
          price: "DKK 150,-",
          access: "Standard"
        },
        {
          type: "Ticket 2",
          price: "DKK 175,-",
          access: "Standard"
        },
        {
          type: "Ticket 3",
          price: "DKK 250,-",
          access: "VIP"
        },
        {
          type: "Ticket 4",
          price: "DKK 300,-",
          access: "VIP"
        }
      ],
        isExpanded: false,
      },
      nonStudentTickets: {
        tickets: [
        {
          type: "Ticket 1",
          price: "DKK 150,-",
          access: "Standard"
        },
        {
          type: "Ticket 2",
          price: "DKK 175,-",
          access: "Standard"
        },
        {
          type: "Ticket 3",
          price: "DKK 250,-",
          access: "VIP"
        },
        {
          type: "Ticket 4",
          price: "DKK 300,-",
          access: "VIP"
        }
      ],
        isExpanded: false,
      }
    };
  }
};
</script>

<style>
.ticket-grid {
  display: grid;
  width: 100%;
  grid-template-columns: 100px minmax(100px, 1fr);
  align-items: center;
}

.ticket-image {
  height: 100px;
  width: 100px;
  background-size: cover;
}

.ticket-content {
  padding: 0 12px;
  font-size: 20px;
}

.list-item,
.list-item__center {
  padding: 0;
}

.list-item__expandable-content {
  padding: 0;
}
</style>
