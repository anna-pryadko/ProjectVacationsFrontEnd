import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalDel extends React.Component {
  render() {

    console.log(this.props.show);
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      position:'absolute',  
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (

<Modal isOpen={this.state.modal} toggle={this.toggle}  style={{modalStyle}}>
          <ModalHeader toggle={this.toggle}>Delete vacation</ModalHeader>
          <ModalBody>
          <p>Are you sure you want to delete vacation </p>
          <p> to {this.props.location} on dates {this.props.dateFrom}-{this.props.dateTo}?</p>
          </ModalBody>
          <ModalFooter>
           
            <Button color="primary" onClick={() =>this.handleClick(this.props.idVac)}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle} href="/HomeAdmin">Cancel</Button>
          </ModalFooter>
</Modal> 




    //   <div className="backdrop" style={{backdropStyle}}>
    //     <div className="modal" style={{modalStyle}}>
    //       {this.props.children}

    //       <div className="footer">
    //         <button onClick={this.props.onClose}>
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    );
  }
}

ModalDel.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalDel;