import { useToast } from '../hooks/useToast';
import { useAuth } from '../hooks/useAuth';

export default function Sidebar({
  user,
  projects,
  activeView,
  activeProjectId,
  onNavigate,
  onNewProject,
  isOpen,
  onClose,
}) {
  const toast = useToast();
  const { logout } = useAuth();

  // Since we now store simple users (email + id only)
  const userInitial = (user?.name || user?.email || 'U')[0].toUpperCase();
  const userLabel = user?.name || user?.email || 'User';

  function handleLogout() {
    logout();
    toast('Signed out successfully', 'info');
  }

  const navItems = [
    { id: 'home', icon: '⌂', label: 'Dashboard' },
    { id: 'history', icon: '◷', label: 'File History' },
    { id: 'settings', icon: '⚙', label: 'Settings' },
  ];

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 150,
            display: 'none',
          }}
          className="mobile-overlay"
          onClick={onClose}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="sidebar-brand-icon">✦</div>
            <span className="sidebar-brand-name">AI Summary</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section-label">Navigation</div>

          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
            >
              <span className="item-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}

          <button
            className="sidebar-item"
            onClick={onNewProject}
            style={{ marginTop: 8 }}
          >
            <span className="item-icon">+</span>
            New Project
          </button>

          {projects.length > 0 && (
            <>
              <div
                className="sidebar-section-label"
                style={{ marginTop: 12 }}
              >
                Projects
              </div>

              {projects.map((project) => (
                <button
                  key={project.id}
                  className={`sidebar-project-item ${
                    activeProjectId === project.id ? 'active' : ''
                  }`}
                  onClick={() => {
                    onNavigate('project', project.id);
                    onClose();
                  }}
                >
                  <div className="sidebar-project-dot" />
                  <span
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {project.name}
                  </span>
                </button>
              ))}
            </>
          )}
        </nav>

        <div className="sidebar-footer">
          <div className="user-chip">
            <div className="user-avatar">
              {userInitial}
            </div>
            <div className="user-info">
              <div className="user-email">{userLabel}</div>
            </div>
          </div>

          <button
            className="sidebar-item"
            onClick={handleLogout}
            style={{ marginTop: 4, color: '#e07a7a' }}
          >
            <span className="item-icon">→</span>
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}