const inputs = document.querySelectorAll('.controls input');

function handleUpdate () {
    // If not suffix default to empty string (color range doesn't have a suffix like px);
    const suffix = this.dataset.sizing || '';
    // Calling these chane of methods we can set a style property value.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('input', handleUpdate));