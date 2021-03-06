AdminConfig = {
  name: 'SSG Jobs and Experts',
  collections: {
    Jobs: {
      icon: 'briefcase',
      tableColumns: [
        {label: 'ID', name: '_id'},
        {label: 'Title', name: 'title'},
        {label: 'User Name', name: 'userName'},
        {label: 'Status', name: 'status'}
      ],
      color: 'red'
    },
    Profiles: {
      icon: 'file-text-o',
      tableColumns: [
        {label: 'ID', name: '_id'},
        {label: 'Title', name: 'title'},
        {label: 'Name', name: 'name'},
        {label: 'User Name', name: 'userName'},
        {label: 'Status', name: 'status'}
      ],
      color: 'green'
    },
  },
  autoForm:{
    omitFields: ['createdAt','updatedAt']
  }
};
