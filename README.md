Using Meteor Sessions
=====================

```
<template name="contact_list">
	<ul>
		{{#each contacts}}
			{{> contact_item }}
		{{/each}}
	</ul>
</template>

<template name="contact_item">
	<li>
		{{name}}
	</li>
</template>
```


```
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
}

```


-----------------------------

```
<template name="add_contact">
	<form>
		<input type="text" name="fullname" class="fullname">
	</form>
</template>
```

```
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
  
```
