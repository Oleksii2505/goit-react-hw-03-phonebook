import PropTypes from 'prop-types';
import { DeleteBtn, Item, List } from './ContactList.styled';

export const ContactList = ({ list, delContact }) => {
    return (
        <List>
            {list.map(({ id, name, number }) => {
                return (
                    <Item key={id}>
                        {name}: {number}{' '}
                        <DeleteBtn
                            type="button"
                            onClick={() => delContact(id)}
                        >
                            Delete
                        </DeleteBtn>
                    </Item>
                );
            })}
        </List>
    );
};

ContactList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};