import React, {Component} from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactList } from "components/ContactList";
import { Container, TitlePhonebook, TitleContacts } from './App.styled';

const STORAGE_KEY = 'contacts';


const initialContacts = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export class App  extends Component {
    state = {
        contacts: initialContacts,
        filter: '',
    };

    componentDidMount() {
        const contacts = localStorage.getItem(STORAGE_KEY);
        const parsedContacts = JSON.parse(contacts);
        if (parsedContacts) {
          this.setState({contacts: parsedContacts});
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
        }
    }
    
    onFormSubmit = data => {
        const nameInclude = this.state.contacts.find(value => value.name.toLowerCase() === data.name.toLowerCase());
        if (nameInclude) {
            alert(`${data.name} is already in contacts.`);
            return;
        }
        
        const numberInclude = this.state.contacts.find(
                    option => option.number === data.number
                );
        if (numberInclude) {
            alert(
                        `${data.number} is already in contacts as ${numberInclude.name}.`
                    );
                    return;
        }
        this.setState(prevState => ({
            contacts: [...prevState.contacts, { ...data, id: nanoid() }],
        }));
    };
    
    getFilteredContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };
    
    deleteContacts = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId
            ),
        }));
    };

    render() {
      const { filter } = this.state;
        return (
          <Container>
          <TitlePhonebook>Phonebook</TitlePhonebook>
          <ContactForm onSubmit={this.onFormSubmit} />

          <TitleContacts>Contacts</TitleContacts>
          <Filter value={filter} onFilter={this.changeFilter} />
          <ContactList
              list={this.getFilteredContacts()}
              delContact={this.deleteContacts}
          />
      </Container>
        );
      }
}