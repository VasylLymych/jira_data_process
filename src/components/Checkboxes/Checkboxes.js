import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GreenCheckbox from './GreenCheckbox/GreenCheckbox';

import './Checkboxes.css';

const Checkboxes = ({checkboxState, setCheckboxState}) => {
    const handleCheckboxChange = (event) => {
        setCheckboxState({
            ...checkboxState,
            [event.target.name]: event.target.checked
        });
    };

    return (
        <Fragment>
            <div className="configuration-fields-title">
                <Typography variant="h6" gutterBottom align="center">
                    If you want, you can configure fields, data from which will
                    be saved in your source file!
                </Typography>
            </div>
            <Typography variant="h6" gutterBottom align="center">
                Required fields
            </Typography>
            <div className="unblock-checkbox">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkboxState.unblockChecked}
                                onChange={handleCheckboxChange}
                                name="unblockChecked"
                                disabled={checkboxState.agreeChecked}
                                color="primary"
                            />
                        }
                        label="Do you want to configure required fields?"
                    />
                </FormGroup>
            </div>
            {checkboxState.unblockChecked && (
                <div className="required-checkboxes">
                    <div>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checkboxState.keyChecked}
                                        onChange={handleCheckboxChange}
                                        name="keyChecked"
                                        disabled={checkboxState.agreeChecked}
                                    />
                                }
                                label="Key"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checkboxState.issueTypeChecked}
                                        onChange={handleCheckboxChange}
                                        name="issueTypeChecked"
                                        disabled={checkboxState.agreeChecked}
                                    />
                                }
                                label="Issue Type"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checkboxState.summaryChecked}
                                        onChange={handleCheckboxChange}
                                        name="summaryChecked"
                                        disabled={checkboxState.agreeChecked}
                                    />
                                }
                                label="Summary"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checkboxState.assigneeChecked}
                                        onChange={handleCheckboxChange}
                                        name="assigneeChecked"
                                        disabled={checkboxState.agreeChecked}
                                    />
                                }
                                label="Assignee"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={
                                            checkboxState.storyPointsChecked
                                        }
                                        onChange={handleCheckboxChange}
                                        name="storyPointsChecked"
                                        disabled={checkboxState.agreeChecked}
                                    />
                                }
                                label="Story points"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checkboxState.statusChecked}
                                        onChange={handleCheckboxChange}
                                        name="statusChecked"
                                        disabled={checkboxState.agreeChecked}
                                    />
                                }
                                label="Status"
                            />
                        </FormGroup>
                    </div>
                </div>
            )}
            <div className="optional-fields-container">
                <Typography variant="h6" gutterBottom align="center">
                    Optional fields
                </Typography>
            </div>
            <div className="optional-checkboxes">
                <div>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkboxState.reporterChecked}
                                    onChange={handleCheckboxChange}
                                    name="reporterChecked"
                                    disabled={checkboxState.agreeChecked}
                                />
                            }
                            label="Reporter"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkboxState.labelsChecked}
                                    onChange={handleCheckboxChange}
                                    name="labelsChecked"
                                    disabled={checkboxState.agreeChecked}
                                />
                            }
                            label="Labels"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkboxState.priorityChecked}
                                    onChange={handleCheckboxChange}
                                    name="priorityChecked"
                                    disabled={checkboxState.agreeChecked}
                                />
                            }
                            label="Priority"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkboxState.subtasksCountChecked}
                                    onChange={handleCheckboxChange}
                                    name="subtasksCountChecked"
                                    disabled={checkboxState.agreeChecked}
                                />
                            }
                            label="Subtasks count"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkboxState.updatedDateChecked}
                                    onChange={handleCheckboxChange}
                                    name="updatedDateChecked"
                                    disabled={checkboxState.agreeChecked}
                                />
                            }
                            label="Updated date"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkboxState.componentsChecked}
                                    onChange={handleCheckboxChange}
                                    name="componentsChecked"
                                    disabled={checkboxState.agreeChecked}
                                />
                            }
                            label="Components"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkboxState.fixVersionsChecked}
                                    onChange={handleCheckboxChange}
                                    name="fixVersionsChecked"
                                    disabled={checkboxState.agreeChecked}
                                />
                            }
                            label="Fix versions"
                        />
                    </FormGroup>
                </div>
            </div>
            <div className="agree-checkbox">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <GreenCheckbox
                                checked={checkboxState.agreeChecked}
                                onChange={handleCheckboxChange}
                                name="agreeChecked"
                            />
                        }
                        label="Are you agree with current configuration?"
                    />
                </FormGroup>
            </div>
        </Fragment>
    );
};

export default Checkboxes;
