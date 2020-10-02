/* eslint-disable react/prop-types */
/* eslint-disable max-len */
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

  onClickAddCategory() {
    const { createListName } = this.state;
    const { handleAddCategory, handleModalState } = this.props;
    handleAddCategory(createListName);
    handleModalState(1);
  }

  render() {
    const {
      favorites, handleToggleFavorite, modalState, handleModalState,
    } = this.props;
    const defaultURL = '../../public/img/icons/emptylisting.png';
    const { createListName } = this.state;

    const renderStays = (length) => {
      if (length > 1) {
        return `${length} Stays`;
      } if (length === 1) {
        return '1 Stay';
      }
      return 'Nothing saved yet';
    };

    // Time, Name, Stays
    const renderModalStateList = favorites.map((list, index) => (
      <SaveModalBodyButton key={Math.random()} onClick={() => handleToggleFavorite('add', index)}>
        <SaveModalBodyButtonDiv>
          <SaveModalBodyButtonDivImgContainer>
            <SaveModalBodyButtonDivImg src={list.listingID.length ? list.listingID[list.listingID.length - 1][1] : defaultURL} />
          </SaveModalBodyButtonDivImgContainer>
          <SaveModalBodyButtonDivTextContainer>
            <SaveModalBodyButtonDivTextContainerTime>{list.time}</SaveModalBodyButtonDivTextContainerTime>
            <SaveModalBodyButtonDivTextContainerTitle>{list.name}</SaveModalBodyButtonDivTextContainerTitle>
            <SaveModalBodyButtonDivTextContainerStays>
              {renderStays(list.listingID.length)}
            </SaveModalBodyButtonDivTextContainerStays>
          </SaveModalBodyButtonDivTextContainer>
        </SaveModalBodyButtonDiv>
      </SaveModalBodyButton>
    ));

    const ModalStateOneSaveList = (
      <>
        <ModalBackground onClick={() => handleModalState(0)} />
        <SaveModal>
          <ModalNavBar>
            <ModalNavBarHeading>Save to a list</ModalNavBarHeading>
            <ModalNavBarBackButton
              src="../../public/img/icons/close-button.png"
              onClick={() => handleModalState(0)}
            />
          </ModalNavBar>
          <ModalBody>
            <SaveModalBodyContainer>
              {renderModalStateList}
            </SaveModalBodyContainer>
          </ModalBody>
          <ModalFooter>
            <SaveModalFooterButton onClick={() => handleModalState(2)}>Create a list</SaveModalFooterButton>
          </ModalFooter>
        </SaveModal>
      </>
    );

    const ModalStateTwoCreateList = (
      <>
        <ModalBackground onClick={() => handleModalState(1)} />
        <CreateListModal>
          <ModalNavBar>
            <ModalNavBarHeading>Name this list</ModalNavBarHeading>
            <ModalNavBarBackButton
              src="../../public/img/icons/close-button.png"
              onClick={() => handleModalState(1)}
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
                  placeholder="Name"
                  maxlength="50"
                  required
                />
              </CreateListModalInputContainerForm>
              <CreateListModalInputContainerText>50 characters maximum</CreateListModalInputContainerText>
            </CreateListModalInputContainer>
          </ModalBody>
          <ModalFooter>
            {createListName.length ? <CreateListModalCreateButtonBlack onClick={() => this.onClickAddCategory()}>Create</CreateListModalCreateButtonBlack> : <CreateListModalCreateButton>Create</CreateListModalCreateButton>}
          </ModalFooter>
        </CreateListModal>
      </>
    );

    const ModalStateThreeShare = (
      <>
        <ModalBackground onClick={() => handleModalState(0)} />
        <ShareModal>
          <ShareModalContainer>
            <ShareModalCloseButtonContainer>
              <ShareModalCloseButton src="../../public/img/icons/close-button.png" onClick={() => handleModalState(0)} />
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
