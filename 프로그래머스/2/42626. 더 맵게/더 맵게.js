class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            
            [this.heap[parentIndex], this.heap[index]] = 
            [this.heap[index], this.heap[parentIndex]];
            
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftIndex <= lastIndex && 
                this.heap[leftIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftIndex;
            }

            if (rightIndex <= lastIndex && 
                this.heap[rightIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = 
            [this.heap[smallestIndex], this.heap[index]];
            
            index = smallestIndex;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    // 힙에 스코빌 지수 추가
    for (const score of scoville) {
        minHeap.push(score);
    }
    
    let mixCount = 0;
    
    // 가장 낮은 스코빌 지수가 K 미만일 때 mix
    while (minHeap.size() > 1 && minHeap.peek() < K) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        
        const mixScoville = first + (second * 2);
        minHeap.push(mixScoville);
        
        mixCount++;
    }
    
    // 모든 음식의 스코빌 지수를 K이상으로 만들 수 없는 경우 -1
    return minHeap.peek() >= K ? mixCount : -1;
    
}