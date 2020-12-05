import React, { useCallback, useEffect } from 'react';
import './index.scss';
import { AddTeamMemberProps, FormValues, FormInputs } from './types';
import { connect } from 'react-redux';
import projectActions from 'store/project/actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames';

function AddTeamMember(props: AddTeamMemberProps): JSX.Element {
  const { pk, onAddTeamMember, addedTeamMemberState, onClose } = props;

  const { handleSubmit, register } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onFormSubmit = useCallback<SubmitHandler<FormValues>>(
    (values) => {
      onAddTeamMember({
        username: values.username,
        pk: pk,
      });
    },
    [onAddTeamMember, pk]
  );

  useEffect(() => {
    if (addedTeamMemberState) {
      onClose();
    }
  }, [addedTeamMemberState]);

  return (
    <div className="add-team-member">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="input-wrp">
          <span className=""> Team Member username </span>
          <input
            name={FormInputs.username}
            id={FormInputs.username}
            type="text"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register({
              required: 'Required',
            })}
            placeholder="Enter username"
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            className={classNames(['main-button typography__variant-subtext'])}
            style={{ marginTop: '32px', fontFamily: 'DM Sans' }}
            type="submit"
          >
            Add team member
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    addedTeamMemberState: state.projectReducer.addedTeamMemberState.data,
  };
};

const mapDispatchToProps = {
  onAddTeamMember: projectActions.addTeamMember,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamMember);
