import React from 'react';

import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';

import Tabs from './tabs/Tabs';
import messages from './messages';

import './navBar.scss';

const CourseTabsNavigation = () => {
  const intl = useIntl();
  const tabs = useSelector(state => state.courseTabs.tabs);
  const TAB_TRANSLATIONS = {
    'Course': 'Curso',
    'Progress': 'Progreso',
    'Dates': 'Fechas',
    'Discussion': 'Discusión',
    'Instructor': 'Instructor',
    'Resources': 'Recursos',
    'Notes': 'Notas',
  };

  const translateTab = (text) => TAB_TRANSLATIONS[text] || text;
  return (
    <div id="courseTabsNavigation" className="course-tabs-navigation px-4 bg-white">
      {!!tabs.length && (
        <Tabs
          className="nav-underline-tabs"
          aria-label={intl.formatMessage(messages.courseMaterial)}
        >
          {tabs.map(({ url, title, slug }) => (
            <a
              key={slug}
              className={classNames('nav-item flex-shrink-0 nav-link', { active: slug === 'discussion' })}
              href={url}
            >
              {translateTab(title)}
            </a>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default React.memo(CourseTabsNavigation);
