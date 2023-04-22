import { Component } from 'react';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({ name: '', number: '' });
    };

    onInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder="Enter contact name"
                        onChange={this.onInputChange}
                        value={this.state.name}
                    />
                </Label>
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder="Enter contact number"
                        onChange={this.onInputChange}
                        value={this.state.number}
                    />
                </Label>
                <SubmitBtn type="submit">Add contact</SubmitBtn>
            </Form>
        );
    }
}