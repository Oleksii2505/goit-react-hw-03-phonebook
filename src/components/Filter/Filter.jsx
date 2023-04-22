import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
    return (
        <Label>
            Find contact by name
            <Input
                type="text"
                name="name"
                placeholder="Enter contact name"
                value={value}
                onChange={onFilter}
                pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
            />
        </Label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
};