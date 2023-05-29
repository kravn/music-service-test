<template>
    <div class="ms-datatable">
        <v-table
            theme="dark"
            fixed-header
            fixed-footer>

            <thead>
                <tr>

                    <slot v-if="props.customHeaders" name="table-header" />

                    <template v-else>
                        <TableHeader
                            v-for="(header, key) in headers"
                            :key="key">
                            {{ stringify(key) }}
                        </TableHeader>
                    </template>

                </tr>
            </thead>

            <tbody>

                <slot v-if="props.complexed" />

                <template v-else>
                    <TableRow
                        v-for="song in props.modelValue"
                        :key="song.id">

                        <TableCell
                            v-for="(track, key) in song">
                            <span class="text-caption">{{  track }}</span>
                        </TableCell>

                    </TableRow>
                </template>

            </tbody>

        </v-table>

        <v-divider></v-divider>

        <div v-if="props.paginate" class="ms-pagination text-center">

            <v-pagination
                v-if="page_length"
                v-model="pagination.page"
                :length="page_length"
                :total-visible="6"
                active-color="pink">
            </v-pagination>

        </div>

    </div>
</template>

<script setup>

import { computed, watch } from 'vue'
import { useArtistStore } from '@/store/artist'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import TableCell from './TableCell.vue'

const emit = defineEmits(['on-page-change', 'on-limit-change', 'on-sort', 'on-sort-by'])

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => []
    },
    customHeaders: {
        type: Boolean,
        default: false
    },
    complexed: {
        type: Boolean,
        default: false
    },
    paginate: {
        type: Boolean,
        default: false
    }
})

// Store
const artist_store = useArtistStore()

// Computed props
const headers = computed(() => props.modelValue?.[0])
const pagination = computed(() => artist_store.pagination)
const page_length = computed(() => Math.round(pagination.value?.total_page / pagination.value?.limit) + 1)
const page_number = computed(() => pagination.value.page)
const page_limit = computed(() => pagination.value.limit)
const page_sort_order = computed(() => pagination.value.sort_order)
const page_sort_by = computed(() => pagination.value.sort_by)

// Watchers
watch(page_number, (value) => {
    emit('on-page-change', value)
})
watch(page_limit, (value) => {
    emit('on-limit-change', value)
})
watch(page_sort_order, (value) => {
    emit('on-sort', value)
})
watch(page_sort_by, (value) => {
    emit('on-sort-by', value)
})

// Methods
const stringify = (str) => {
    if (!str) return

    // Add a space before capital letters (except the first character)
    const sentence = str.replace(/([A-Z])/g, ' $1')

    // Capitalize the first character and remove leading/trailing spaces
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).trim();
}

</script>