import React, { Component } from 'react';
import {
  ModalBackground,
  SaveModal,
  ModalNavBar,
  ModalNavBarBackButton,
  ModalNavBarHeading,
  ModalBody,
  SaveModalBodyContainer,
  SaveModalBodyButton,
  ModalFooter,
  SaveModalFooterButton,
  CreateListModal,
  CreateListModalCreateButton,
  CreateListModalInputContainer,
  CreateListModalInputContainerForm,
  CreateListModalInputContainerFormText,
  CreateListModalInputContainerFormInput,
  CreateListModalInputContainerText,
  CreateListModalCreateButtonBlack,
  SaveModalBodyButtonDiv,
  SaveModalBodyButtonDivImg,
  SaveModalBodyButtonDivImgContainer,
  SaveModalBodyButtonDivTextContainer,
  SaveModalBodyButtonDivTextContainerTime,
  SaveModalBodyButtonDivTextContainerTitle,
  SaveModalBodyButtonDivTextContainerStays,
  ShareModal,
  ShareModalContainer,
  ShareModalCloseButtonContainer,
  ShareModalCloseButton,
  ShareModalHeading,
  ShareModalItem,
  ShareModalItemLink,
  ShareModalItemIcon,
} from '../../../styled/gallerySaveShareModal';

class GallerySaveShareModal extends Component {
  constructor() {
    super();
    this.state = {
      createListName: '',
    };
  }

  render() {
    const { modalState, setModalState } = this.props;
    const { createListName } = this.state;

    // Time, Name, Stays
    const renderModalStateList = (
      <SaveModalBodyButton>
        <SaveModalBodyButtonDiv>
          <SaveModalBodyButtonDivImgContainer>
            <SaveModalBodyButtonDivImg src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/feat-1.png" />
          </SaveModalBodyButtonDivImgContainer>
          <SaveModalBodyButtonDivTextContainer>
            <SaveModalBodyButtonDivTextContainerTime>Any time</SaveModalBodyButtonDivTextContainerTime>
            <SaveModalBodyButtonDivTextContainerTitle>Dream Homes</SaveModalBodyButtonDivTextContainerTitle>
            <SaveModalBodyButtonDivTextContainerStays>1 stay</SaveModalBodyButtonDivTextContainerStays>
          </SaveModalBodyButtonDivTextContainer>
        </SaveModalBodyButtonDiv>
      </SaveModalBodyButton>
    );

    const ModalStateOneSaveList = (
      <>
        <ModalBackground onClick={() => setModalState(0)} />
        <SaveModal>
          <ModalNavBar>
            <ModalNavBarHeading>Save to a list</ModalNavBarHeading>
            <ModalNavBarBackButton
              src="../../public/img/icons/close-button.png"
              onClick={() => setModalState(0)}
            />
          </ModalNavBar>
          <ModalBody>
            <SaveModalBodyContainer>
              {renderModalStateList}
              {renderModalStateList}
              {renderModalStateList}
              {renderModalStateList}
              {renderModalStateList}
              {renderModalStateList}
              {renderModalStateList}
            </SaveModalBodyContainer>
          </ModalBody>
          <ModalFooter>
            <SaveModalFooterButton onClick={() => setModalState(2)}>Create a list</SaveModalFooterButton>
          </ModalFooter>
        </SaveModal>
      </>
    );

    const ModalStateTwoCreateList = (
      <>
        <ModalBackground onClick={() => setModalState(1)} />
        <CreateListModal>
          <ModalNavBar>
            <ModalNavBarHeading>Name this list</ModalNavBarHeading>
            <ModalNavBarBackButton
              src="../../public/img/icons/close-button.png"
              onClick={() => setModalState(1)}
            />
          </ModalNavBar>
          <ModalBody>
            <CreateListModalInputContainer>
              <CreateListModalInputContainerForm>
                <CreateListModalInputContainerFormText visibility={createListName.length ? 'visible' : 'hidden'}>Name</CreateListModalInputContainerFormText>
                <CreateListModalInputContainerFormInput
                  value={createListName}
                  onFocus={(e) => { e.target.placeholder = ''; }}
                  onBlur={(e) => { e.target.value === '' ? e.target.placeholder = 'Name' : null; }}
                  onChange={(e) => this.setState({ createListName: e.target.value })}
                  required
                />
              </CreateListModalInputContainerForm>
              <CreateListModalInputContainerText>50 characters maximum</CreateListModalInputContainerText>
            </CreateListModalInputContainer>
          </ModalBody>
          <ModalFooter>
            {createListName.length ? <CreateListModalCreateButtonBlack>Create</CreateListModalCreateButtonBlack> : <CreateListModalCreateButton>Create</CreateListModalCreateButton>}
          </ModalFooter>
        </CreateListModal>
      </>
    );

    const ModalStateThreeShare = (
      <>
        <ModalBackground onClick={() => setModalState(0)} />
        <ShareModal>
          <ShareModalContainer>
            <ShareModalCloseButtonContainer>
              <ShareModalCloseButton src="../../public/img/icons/close-button.png" onClick={() => setModalState(0)} />
            </ShareModalCloseButtonContainer>
            <ShareModalHeading>
              Share this place with friends and family
            </ShareModalHeading>
            <ShareModalItem>
              <ShareModalItemLink>
                <ShareModalItemIcon src="../../public/img/icons/facebook.png" />
                &nbsp;&nbsp;
                Facebook
              </ShareModalItemLink>
            </ShareModalItem>
            <ShareModalItem>
              <ShareModalItemLink>
                <ShareModalItemIcon src="../../public/img/icons/twitter.png" />
                &nbsp;&nbsp;
                Twitter
              </ShareModalItemLink>
            </ShareModalItem>
            <ShareModalItem>
              <ShareModalItemLink>
                <ShareModalItemIcon src="../../public/img/icons/copy.png" />
                &nbsp;&nbsp;
                Copy Link
              </ShareModalItemLink>
            </ShareModalItem>
            <ShareModalItem>
              <ShareModalItemLink>
                <ShareModalItemIcon src="../../public/img/icons/email.png" />
                &nbsp;&nbsp;
                Email
              </ShareModalItemLink>
            </ShareModalItem>
            <ShareModalItem>
              <ShareModalItemLink>
                <ShareModalItemIcon src="../../public/img/icons/sms-bubble-speech.png" />
                &nbsp;&nbsp;
                SMS
              </ShareModalItemLink>
            </ShareModalItem>
            <ShareModalItem>
              <ShareModalItemLink>
                <ShareModalItemIcon src="../../public/img/icons/messenger.png" />
                &nbsp;&nbsp;
                Messenger
              </ShareModalItemLink>
            </ShareModalItem>
            <ShareModalItem>
              <ShareModalItemLink>
                <ShareModalItemIcon src="../../public/img/icons/whatsapp.png" />
                &nbsp;&nbsp;
                WhatsApp
              </ShareModalItemLink>
            </ShareModalItem>
            <ShareModalItem>
              <ShareModalItemLink>
                <ShareModalItemIcon src="../../public/img/icons/embed.svg" />
                &nbsp;&nbsp;
                Embed
              </ShareModalItemLink>
            </ShareModalItem>
          </ShareModalContainer>
        </ShareModal>
      </>
    );

    return (
      <>
        {modalState === 1 ? ModalStateOneSaveList : null}
        {modalState === 2 ? ModalStateTwoCreateList : null}
        {modalState === 3 ? ModalStateThreeShare : null}
      </>
    );
  }
}

export default GallerySaveShareModal;
