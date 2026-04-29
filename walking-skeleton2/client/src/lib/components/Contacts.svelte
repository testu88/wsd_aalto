<script>
  // nothing here yet
  let contacts = $state([]);
  // Add a contact
  const addContact = (e) => {
    e.preventDefault();
    const contact = Object.fromEntries(new FormData(e.target));
  contact.id = contacts.length +1;
  contacts.push(contact);
  e.target.reset();
  };
  // Remove a contact
  const removeContact = (id) => {
    console.log(`id: ${id}, contacts: ${contacts}`);
    contacts = contacts.filter((contact) => contact.id !== id);
  };
</script>

<!-- nothing here yet -->
<h1>Contacts</h1>
<h2>Add Contact</h2>
<form onsubmit={addContact}>
  <label>
    Name:
    <input type="text" id="name" name="name" placeholder="Add your name" />
  </label>
  <label>
    Phone:
    <input type="text" id="phone" name="phone" placeholder="Add your phone number" />
  </label>
  <input type="submit" value="Add Contact" />
</form>
<h2>Contact List</h2>
<ul>
  {#each contacts as contact}
  <li >
    {contact.name} : {contact.phone}
    <button onclick={() => removeContact(contact.id)}>Remove</button>
  </li>
  {/each}
</ul>