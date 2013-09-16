if( Meteor.isClient ) {
  var contacts = [
    {
      name: "john doe"
    },

    {
      name: "jane joe"
    },

    {
      name: "susan doe"
    }

  ]

  Session.set("contacts", contacts);

  Template.contact_list.contacts = function() {
    return Session.get("contacts");
  }

  Template.add_contact.events({
    "submit form": function(e, t) {
      e.preventDefault();
      
      var fullname = t.find(".fullname").value;

      var contacts = Session.get("contacts");

      var person = {
        name: fullname
      }

      contacts.push(person);

      Session.set("contacts", contacts);

      t.find(".fullname").value = "";
    }
  });


  Template.contact_item.events({
    "click": function(e, t) {
      var contacts = Session.get("contacts");

      var new_contacts = _.reject(contacts, function(contact) {
        return contact.name == t.data.name
      });

  
      // var new_contacts = [];
      // for(var i = 0; i < contacts.length; i++ ) {
      //   if(contacts[i].name != t.data.name) {
      //      new_contacts.push(contacts[i])
      //   }
      // }


      Session.set("contacts", new_contacts);
    }
  });
}