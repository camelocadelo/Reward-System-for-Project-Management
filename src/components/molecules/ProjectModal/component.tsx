import React, { useCallback, useEffect } from 'react';
import './index.scss';
import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, FormInputs, ProjectModalProps } from './types';
import Close from 'assets/images/close.png';
import projectActions from 'store/project/actions';
import { connect } from 'react-redux';

function ProjectModal(props: ProjectModalProps): JSX.Element {
  const { onCloseModal, createProject, projectData, onProjectFormSubmit } = props;

  const { handleSubmit, register } = useForm<FormValues>({
    mode: 'onChange',
  });

  // const onFormSubmit = useCallback<SubmitHandler<FormValues>>(
  //   (values) => {
  //     createProject({
  //       name: values.projectName,
  //       telegram_bonus: parseInt(values.telegramBonus, 10),
  //       git_bonus: parseInt(values.gitBonus, 10),
  //       slack_bonus: parseInt(values.slackBonus, 10),
  //     });
  //   },
  //   [createProject]
  // );

  useEffect(() => {
    if (projectData) {
      onCloseModal();
    }
  }, [projectData, onCloseModal]);

  return (
    <div className="project-modal">
      <div className="project-modal-header">
        <div></div>
        <div style={{ cursor: 'pointer' }}>
          <img src={Close} alt="close" onClick={onCloseModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onProjectFormSubmit)}>
        <div className="input-wrp">
          <span className=""> Project Name </span>
          <input
            name={FormInputs.ProjectName}
            id={FormInputs.ProjectName}
            type="text"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register({
              required: 'Required',
            })}
            placeholder="Enter project name"
            required
          />
        </div>
        <div className="input-wrp mt-8">
          <span className=""> Telegram Bonus </span>
          <input
            name={FormInputs.TelegramBonus}
            id={FormInputs.TelegramBonus}
            type="number"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register()}
            placeholder="Enter value for Telegram Bonus"
            required
          />
        </div>
        <div className="input-wrp" style={{ marginTop: '8px' }}>
          <span className=""> Git Bonus </span>
          <input
            name={FormInputs.GitBonus}
            id={FormInputs.GitBonus}
            type="number"
            className="inputText typography__variant-text my-8"
            placeholder="Enter value for Git Bonus"
            required
            ref={register()}
          />
        </div>
        <div className="input-wrp mt-8">
          <span className=""> Slack Bonus </span>
          <input
            name={FormInputs.SlackBonus}
            id={FormInputs.SlackBonus}
            type="number"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register()}
            placeholder="Enter value for Slack Bonus"
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            className={classNames(['main-button typography__variant-subtext'])}
            style={{ marginTop: '32px', fontFamily: 'DM Sans' }}
            type="submit"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    projectData: state.projectReducer.createProjectState.data,
  };
};

const mapDispatchToProps = {
  createProject: projectActions.createProject,
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(ProjectModal);
