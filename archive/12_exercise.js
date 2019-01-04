module.exports = function filter(candidates, filters) {
  const availableImmediatelyFilter = filters.includes('AVAILABLE_IMMEDIATELY');
  const freshGradFilter = !availableImmediatelyFilter && filters.includes('FRESH_GRAD');

  return candidates.filter((candidate)=> {
    if(availableImmediatelyFilter) {
      return candidate.options.includes('AVAILABLE_IMMEDIATELY');
    }
    if (freshGradFilter) {
      return candidate.options.includes('FRESH_GRAD');
    }
    return filters.every(filter => candidate.options.includes(filter));
  })
};