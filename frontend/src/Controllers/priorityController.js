const colors = ["#b33a3a", "#ff6700", "#32cd32"]

function Priority(priority) {
    const level = ["High", "Medium", "Low"];
    return {
        level:(level[priority-1]),
        color:(colors[priority-1])
    }
}
export default Priority;