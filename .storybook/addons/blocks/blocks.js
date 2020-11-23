import React from 'react'
import ReactMarkdown from 'react-markdown'

export const DocCodeHeader = ({ title, description }) => (
  <>
    {title && <h1 className="sbdocs sbdocs-h1">{title}</h1>}
    {description && (
      <p className="sbdocs sbdocs-p">
        <ReactMarkdown source={description} />
      </p>
    )}
  </>
)

export const DocCodeDependencies = ({ json }) => {
  const deps = json.peerDependencies

  return (
    <div className="sbdocs sbdocs-dependencies-wrapper">
      <p className="sbdocs sbdocs-p">
        <span className="sbdocs sbdocs-code">npm install {json.name} --save</span>
      </p>
      <h2 className="sbdocs sbdocs-h2">
        Peer Dependencies ({json.name}:{json.version})
      </h2>
      <p className="sbdocs sbdocs-p">
        This package has the following peer dependencies which are not bundled into this individual
        component.
      </p>
      <ul className="sbdocs sbdocs-ul">
        {Object.keys(deps).map(dep => {
          return (
            <li className="sbdocs sbdocs-li" key={dep}>
              <span className="sbdocs sbdocs-mono">
                {dep} : {deps[dep]}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const DocCodeProps = ({ argTable, title }) => {
  return (
    <div className="sbdocs sbdocs-props-wrapper">
      {title ? (
        <h2 className="sbdocs sbdocs-h2">Props of {title}</h2>
      ) : (
        <h2 className="sbdocs sbdocs-h2">Props</h2>
      )}
      {argTable}
    </div>
  )
}

export const DocCodeChangeLog = ({ changelog }) => {
  return (
    <div className="sbdocs sbdocs-changelog-wrapper">
      <h2 className="sbdocs sbdocs-h2">Change Log</h2>
      <div className="sbdocs sbdocs-changelist">
        {changelog ? (
          <ReactMarkdown source={changelog} />
        ) : (
          <div className="sbdocs sbdocs-note">
            <div className="sbdocs sbdocs-error">Oops!</div>
            <p className="sbdocs sbdocs-p">
              Did you forget to hook up your <b>CHANGELOG</b> file in the story file? Did you even
              create a CHANGELOG file...?
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export const DocCodePage = ({ argTable, json, title, description, changelog }) => (
  <>
    <DocCodeHeader title={title} description={description} />
    {json && <DocCodeDependencies json={json} />}
    {argTable && <DocCodeProps argTable={argTable} />}
    <DocCodeChangeLog changelog={changelog} />
  </>
)

export const DocStoryContainer = ({ children, pad }) => {
  const spaceAroundComponent = pad || '30px 20px'

  return <div style={{ padding: spaceAroundComponent, overflow: 'auto' }}>{children}</div>
}

export const DocStoryList = ({ stories, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {stories}
    </div>
  )
}

export const FlexContainer = ({
  children,
  padding = 0,
  direction = 'row',
  containerStyles = {},
  itemStyles = {},
}) => {
  return (
    <div style={{ display: 'flex', padding: 20, flexDirection: direction, ...containerStyles }}>
      {React.Children.map(children, child => (
        <div style={{ padding, ...itemStyles }}>{child}</div>
      ))}
    </div>
  )
}
