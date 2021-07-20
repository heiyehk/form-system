<template>
  <div v-if="!currentIdFormAttr.__attr__?.length" class="flex-center" style="height: 100%">
    <a-empty :image="simpleImage" description="请先使用组件" />
  </div>
  <div v-if="!selectItemId && currentIdFormAttr.__attr__?.length" class="flex-center" style="height: 100%">
    <a-empty :image="simpleImage" description="选中组件后展示" />
  </div>
  <a-form
    v-if="selectItemId && currentIdComponentAttr"
    class="making-form-right"
    :model="currentIdComponentAttr"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <template v-if="currentIdComponentAttr.component === 'a-Divider'">
      <a-form-item label="标题">
        <a-input v-model:value="currentIdComponentAttr.label" maxLength="20" allowClear />
      </a-form-item>
      <a-form-item label="启用虚线">
        <a-switch v-model:checked="currentIdComponentAttr.options.dashed" />
      </a-form-item>
      <a-form-item label="位置">
        <a-radio-group v-model:value="currentIdComponentAttr.options.orientation" button-style="solid">
          <a-radio-button value="left">左</a-radio-button>
          <a-radio-button value="center">中</a-radio-button>
          <a-radio-button value="right">右</a-radio-button>
        </a-radio-group>
      </a-form-item>
    </template>
    <template v-else>
      <!-- 常用属性 -->
      <a-divider>常用属性</a-divider>
      <a-form-item label="表单名称">
        <a-input v-model:value="currentIdComponentAttr.label" maxLength="20" allowClear />
      </a-form-item>
      <a-form-item>
        <template #label>
          <a-tooltip placement="left" title="model的key值">
            <span>组件字段</span>
            <QuestionCircleOutlined class="label-icon" />
          </a-tooltip>
        </template>
        <a-input v-model:value="currentIdComponentAttr._key" maxLength="20" allowClear />
      </a-form-item>
      <a-form-item label="必填">
        <a-switch v-model:checked="currentIdComponentAttr.required" />
      </a-form-item>
      <template v-if="!['a-Switch'].includes(currentIdComponentAttr.component)">
        <a-form-item label="占位">
          <a-input v-model:value="currentIdComponentAttr.options.props.placeholder" maxLength="20" allowClear />
        </a-form-item>
        <a-form-item
          label="默认值"
          v-if="!['a-Textarea', 'a-Tinymce', 'a-Bytemd'].includes(currentIdComponentAttr.component)"
        >
          <a-input v-model:value="currentIdComponentAttr.options.props.value" maxLength="20" allowClear />
        </a-form-item>
        <a-form-item label="默认值" v-else>
          <a-textarea v-model:value="currentIdComponentAttr.options.props.value" maxLength="20" allowClear />
        </a-form-item>
        <a-form-item label="显示标签">
          <a-switch v-model:checked="currentIdComponentAttr.options.label" />
        </a-form-item>
        <a-form-item label="组件格栅">
          <a-slider v-model:value="currentIdComponentAttr.options.wrapperColSpan" :min="4" :max="24" />
        </a-form-item>
      </template>
      <!-- 组件属性 -->
      <a-divider>组件属性</a-divider>
      <!-- 其他通用属性 -->
      <a-form-item
        label="最大长度"
        v-if="['a-Input', 'a-InputNumber', 'a-InputPassword', 'a-Textarea'].includes(currentIdComponentAttr.component)"
      >
        <a-input-number
          typeof="number"
          v-model:value="currentIdComponentAttr.options.props.maxlength"
          maxLength="20"
          allowClear
        />
      </a-form-item>
      <a-form-item label="禁用">
        <a-switch v-model:checked="currentIdComponentAttr.options.props.disabled" />
      </a-form-item>
      <a-form-item
        v-if="
          [
            'a-Input',
            'a-InputNumber',
            'a-InputPassword',
            'a-AutoComplete',
            'a-Textarea',
            'a-Mentions',
            'a-TimePicker',
            'a-Rate',
            'a-Switch',
            'a-Slider',
            'a-DatePicker',
            'a-Select'
          ].includes(currentIdComponentAttr.component)
        "
        label="获取焦点"
      >
        <a-switch v-model:checked="currentIdComponentAttr.options.props.autofocus" />
      </a-form-item>
      <a-form-item
        v-if="
          [
            'a-Input',
            'a-Textarea',
            'a-InputPassword',
            'a-DatePicker',
            'a-TimePicker',
            'a-Select',
            'a-TreeSelect'
          ].includes(currentIdComponentAttr.component)
        "
        label="清除图标"
      >
        <a-switch v-model:checked="currentIdComponentAttr.options.props.allowClear" />
      </a-form-item>
      <!-- end 其他通用属性 -->
      <!-- Input -->
      <template v-if="['a-Input', 'a-InputPassword'].includes(currentIdComponentAttr.component)">
        <a-form-item label="前置内容">
          <a-input v-model:value="currentIdComponentAttr.options.props.addonBefore" maxLength="20" allowClear />
        </a-form-item>
        <a-form-item label="后置内容">
          <a-input v-model:value="currentIdComponentAttr.options.props.addonAfter" maxLength="20" allowClear />
        </a-form-item>
      </template>
      <!-- InputNumber -->
      <template v-if="currentIdComponentAttr.component === 'a-InputNumber'">
        <a-form-item label="最大值">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.max" />
        </a-form-item>
        <a-form-item label="最小值">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.min" />
        </a-form-item>
        <a-form-item label="最小值">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.min" />
        </a-form-item>
        <a-form-item label="数值精度">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.precision" />
        </a-form-item>
        <a-form-item label="小数点">
          <a-input v-model:value="currentIdComponentAttr.options.props.decimalSeparator" allowClear />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="每次改变步数，可以为小数">
              <span>步长</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-input-number v-model:value="currentIdComponentAttr.options.props.step" />
        </a-form-item>
      </template>
      <!-- Textarea -->
      <template v-if="currentIdComponentAttr.component === 'a-Textarea'">
        <a-form-item label="展示字数">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.showCount" />
        </a-form-item>
        <!-- TODO 自适应高度和高度调整 -->
        <a-form-item label="自适应高度">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.autoSize" />
        </a-form-item>
        <a-form-item label="最小高度">
          <a-input-number
            v-model:value="currentIdComponentAttr.options.props.autoSize.minRows"
            maxLength="20"
            allowClear
            :disabled="currentIdComponentAttr.options.props.autoSize"
          />
        </a-form-item>
        <a-form-item label="最大高度">
          <a-input-number
            v-model:value="currentIdComponentAttr.options.props.autoSize.maxRows"
            maxLength="20"
            allowClear
            :disabled="currentIdComponentAttr.options.props.autoSize"
          />
        </a-form-item>
      </template>
      <!-- Mentions -->
      <template v-if="currentIdComponentAttr.component === 'a-Mentions'">
        <a-form-item label="输入框高">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.rows" :min="1" :max="20" />
        </a-form-item>
      </template>
      <!-- Tinymce -->
      <template v-if="currentIdComponentAttr.component === 'a-Tinymce'">
        <a-form-item label="宽度">
          <a-input v-model:value="currentIdComponentAttr.options.props.width" />
        </a-form-item>
        <a-form-item label="高度">
          <a-input v-model:value="currentIdComponentAttr.options.props.height" />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="显示隐藏tiny的标识">
              <span>底部标识</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:checked="currentIdComponentAttr.options.props.branding" />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="显示编辑器顶部菜单功能">
              <span>菜单栏</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:checked="currentIdComponentAttr.options.props.menubar" />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="图片上传接口">
              <span>图传接口</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-input v-model:value="currentIdComponentAttr.options.props.images_upload_url" />
        </a-form-item>
      </template>
      <!-- Rate -->
      <template v-if="currentIdComponentAttr.component === 'a-Rate'">
        <a-form-item label="点击清除">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.allowClear" />
        </a-form-item>
        <a-form-item label="启用半选">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.allowHalf" />
        </a-form-item>
        <a-form-item label="自定义">
          <a-input v-model:value="currentIdComponentAttr.options.props.character" />
        </a-form-item>
        <a-form-item label="总数">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.count" />
        </a-form-item>
      </template>
      <!-- Switch -->
      <template v-if="currentIdComponentAttr.component === 'a-Switch'">
        <a-form-item label="默认值">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.checked" />
        </a-form-item>
        <a-form-item label="选中内容">
          <a-input v-model:value="currentIdComponentAttr.options.props.checkedChildren" />
        </a-form-item>
        <a-form-item label="非选中内容">
          <a-input v-model:value="currentIdComponentAttr.options.props.unCheckedChildren" />
        </a-form-item>
      </template>
      <!-- Slider -->
      <template v-if="currentIdComponentAttr.component === 'a-Slider'">
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="是否只能拖拽到刻度上">
              <span>拖拽刻度</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:checked="currentIdComponentAttr.options.props.dots" />
        </a-form-item>
        <a-form-item label="最大值">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.max" />
        </a-form-item>
        <a-form-item label="最小值">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.min" />
        </a-form-item>
        <a-form-item label="双滑块">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.range" />
        </a-form-item>
        <a-form-item label="反向">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.reverse" />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip
              placement="left"
              title="步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。"
            >
              <span>步长</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-input-number v-model:value="currentIdComponentAttr.options.props.step" />
        </a-form-item>
        <a-form-item label="垂直">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.vertical" />
        </a-form-item>
        <a-form-item label="最小值">
          <a-select v-model:value="currentIdComponentAttr.options.props.tooltipPlacement">
            <template v-for="item in tooltipPlacement" :key="item">
              <a-select-option :value="item">{{ item }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left">
              <template #title>
                <p>值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。</p>
                <p style="margin-bottom: 0">清除状态可还原</p>
              </template>
              <span>tip显隐</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:checked="currentIdComponentAttr.options.props.tooltipVisible" />
          <a-button type="link" @click="currentIdComponentAttr.options.props.tooltipVisible = undefined">
            清除状态
          </a-button>
        </a-form-item>
      </template>
      <!-- DatePicker -->
      <template v-if="currentIdComponentAttr.component === 'a-DatePicker'">
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="设置日期格式，不设置值的格式化，默认是moment格式">
              <span>格式化</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-input v-model:value="currentIdComponentAttr.options.props.format" />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip
              placement="left"
              title="可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象"
            >
              <span>值格式化</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-input v-model:value="currentIdComponentAttr.options.props.valueFormat" />
        </a-form-item>
        <a-form-item label="输入框只读">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.inputReadOnly" />
        </a-form-item>
        <a-form-item label="类型">
          <a-radio-group v-model:value="currentIdComponentAttr.options.props.mode" button-style="solid">
            <a-radio-button value="time">time</a-radio-button>
            <a-radio-button value="date">date</a-radio-button>
            <a-radio-button value="month">month</a-radio-button>
            <a-radio-button value="year">year</a-radio-button>
            <a-radio-button value="decade">decade</a-radio-button>
          </a-radio-group>
        </a-form-item>
      </template>
      <!-- DatePicker -->
      <template v-if="currentIdComponentAttr.component === 'a-TimePicker'">
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="设置日期格式，不设置值的格式化，默认是moment格式">
              <span>格式化</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-input v-model:value="currentIdComponentAttr.options.props.format" />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip
              placement="left"
              title="可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象"
            >
              <span>值格式化</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-input v-model:value="currentIdComponentAttr.options.props.valueFormat" />
        </a-form-item>
        <a-form-item label="清除文案">
          <a-input v-model:value="currentIdComponentAttr.options.props.clearText" />
        </a-form-item>
        <a-form-item label="输入框只读">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.inputReadOnly" />
        </a-form-item>
        <a-form-item label="12小时制">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.use12Hours" />
        </a-form-item>
        <a-form-item label="时间隔">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.hourStep" />
        </a-form-item>
        <a-form-item label="分间隔">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.minuteStep" />
        </a-form-item>
        <a-form-item label="秒间隔">
          <a-input-number v-model:value="currentIdComponentAttr.options.props.secondStep" />
        </a-form-item>
        <a-form-item label="位置">
          <a-radio-group v-model:value="currentIdComponentAttr.options.props.mode" button-style="solid">
            <a-radio-button value="time">time</a-radio-button>
            <a-radio-button value="date">date</a-radio-button>
            <a-radio-button value="month">month</a-radio-button>
            <a-radio-button value="year">year</a-radio-button>
            <a-radio-button value="decade">decade</a-radio-button>
          </a-radio-group>
        </a-form-item>
      </template>
      <!-- Tree -->
      <template v-if="currentIdComponentAttr.component === 'a-TreeSelect'">
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="是否节点占据一行">
              <span>节点一行</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:check="currentIdComponentAttr.options.props.blockNode" />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段">
              <span>替换key</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <InputOptions
            oneplaceholder="key"
            twoplaceholder="value"
            v-model:value="currentIdComponentAttr.options.props.replaceFields"
          />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="默认展开所有树节点">
              <span>展开节点</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:check="currentIdComponentAttr.options.props.treeDefaultExpandAll" />
        </a-form-item>
      </template>
      <!-- Upload -->
      <template v-if="currentIdComponentAttr.component === 'a-Upload'">
        <a-form-item label="文件类型">
          <a-select placeholder="请选择文件类型" v-model:value="currentIdComponentAttr.options.props.accept">
            <template v-for="item in uploadAccept" :key="item">
              <a-select-option :value="item.value">{{ item.label }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="服务端渲染时需要打开这个">
              <span>服务端渲染</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:checked="currentIdComponentAttr.options.props.supportServerRender" />
        </a-form-item>
        <a-form-item label="上传地址">
          <a-input v-model:value="currentIdComponentAttr.options.props.action" />
        </a-form-item>
        <a-form-item label="携带cookie">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.withCredentials" />
        </a-form-item>
        <a-form-item label="文件夹">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.directory" />
        </a-form-item>
        <a-form-item label="多选">
          <a-switch v-model:checked="currentIdComponentAttr.options.props.multiple" />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="点击打开文件对话框">
              <span>文件对话框</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:checked="currentIdComponentAttr.options.props.openFileDialogOnClick" />
          <a-button type="link" @click="currentIdComponentAttr.options.props.openFileDialogOnClick = undefined">
            清除状态
          </a-button>
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="是否展示 uploadList, 可设为一个对象">
              <span>文件列表</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-switch v-model:checked="currentIdComponentAttr.options.props.showUploadList" />
        </a-form-item>
        <a-form-item label="请求头">
          <InputOptions
            oneplaceholder="key"
            twoplaceholder="value"
            v-model:value="currentIdComponentAttr.options.props.headers"
          />
        </a-form-item>
        <a-form-item label="数据">
          <InputOptions
            oneplaceholder="key"
            twoplaceholder="value"
            v-model:value="currentIdComponentAttr.options.props.data"
          />
        </a-form-item>
        <a-form-item>
          <template #label>
            <a-tooltip placement="left" title="上传的布局，按钮、多个图片垂直布局、多个图片水平布局">
              <span>样式</span>
              <QuestionCircleOutlined class="label-icon" />
            </a-tooltip>
          </template>
          <a-radio-group v-model:value="currentIdComponentAttr.options.props.listType" button-style="solid">
            <a-radio-button value="text">按钮</a-radio-button>
            <a-radio-button value="picture">图垂直</a-radio-button>
            <a-radio-button value="picture-card">图水平</a-radio-button>
          </a-radio-group>
        </a-form-item>
      </template>
    </template>
    <template v-if="currentIdComponentAttr.component === 'a-Select'">
      <a-form-item>
        <template #label>
          <a-tooltip placement="left" title="是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。">
            <span>清空搜索</span>
            <QuestionCircleOutlined class="label-icon" />
          </a-tooltip>
        </template>
        <a-switch v-model:checked="currentIdComponentAttr.options.props.multiple" />
      </a-form-item>
      <a-form-item label="空提示">
        <a-input v-model:value="currentIdComponentAttr.options.props.notFoundContent" />
      </a-form-item>
      <a-form-item label="边框">
        <a-switch v-model:checked="currentIdComponentAttr.options.props.bordered" />
      </a-form-item>
      <a-form-item label="启用搜索">
        <a-switch v-model:checked="currentIdComponentAttr.options.props.showSearch" />
      </a-form-item>
      <a-form-item label="启用箭头">
        <a-switch v-model:checked="currentIdComponentAttr.options.props.showArrow" />
      </a-form-item>
      <!-- <a-form-item label="高亮第一条">
        <a-switch v-model:checked="currentIdComponentAttr.options.props.defaultActiveFirstOption" />
      </a-form-item> -->
      <a-form-item>
        <template #label>
          <a-tooltip placement="left" title="下拉菜单和选择器同宽">
            <span>同宽</span>
            <QuestionCircleOutlined class="label-icon" />
          </a-tooltip>
        </template>
        <a-switch v-model:checked="currentIdComponentAttr.options.props.dropdownMatchSelectWidth" />
      </a-form-item>
      <a-form-item>
        <template #label>
          <a-tooltip placement="left" title="默认高亮的选项">
            <span>默认高亮</span>
            <QuestionCircleOutlined class="label-icon" />
          </a-tooltip>
        </template>
        <SingleInputOptions
          oneplaceholder="key"
          twoplaceholder="value"
          :double="false"
          v-model:value="currentIdComponentAttr.options.props.firstActiveValue"
        />
      </a-form-item>
      <a-form-item>
        <template #label>
          <a-tooltip placement="left" title="设置 Select 的模式为多选或标签">
            <span>类型</span>
            <QuestionCircleOutlined class="label-icon" />
          </a-tooltip>
        </template>
        <a-radio-group v-model:value="currentIdComponentAttr.options.props.mode" button-style="solid">
          <a-radio-button value="multiple">多选</a-radio-button>
          <a-radio-button value="tags">标签</a-radio-button>
          <a-radio-button value="combobox">单选</a-radio-button>
        </a-radio-group>
        <a-button type="link" @click="currentIdComponentAttr.options.props.mode = undefined">清除状态</a-button>
      </a-form-item>
    </template>
  </a-form>
</template>

<script lang="ts">
import { formsOptions } from '@/config/drag-form/reactiveFormOptions';
import { Empty } from 'ant-design-vue';
import { computed, defineComponent } from 'vue';
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import { RightFormAttrType, FormItemComponentAttr } from '@/types/drag-form/forms';
import moment from 'moment';
import InputOptions from '../../components/InputOptions.vue';
import SingleInputOptions from '../../components/SingleInputOptions.vue';

export default defineComponent({
  components: {
    QuestionCircleOutlined,
    InputOptions,
    SingleInputOptions
  },
  props: {
    makingId: String,
    selectItemId: String
  },
  setup(props) {
    const currentIdFormAttr: RightFormAttrType = formsOptions.value.filter((item) => item._id === props.makingId)[0];
    let currentIdComponentAttr = computed(
      () => currentIdFormAttr.__attr__?.filter((item) => item._id === props.selectItemId)[0] as FormItemComponentAttr
    );

    const tooltipPlacement = [
      'top',
      'left',
      'right',
      'bottom',
      'topLeft',
      'topRight',
      'bottomLeft',
      'bottomRight',
      'leftTop',
      'leftBottom',
      'rightTop',
      'rightBottom'
    ];

    const uploadAccept = [
      {
        label: '图片',
        value: 'image/*'
      },
      {
        label: '音频',
        value: 'audio/*'
      },
      {
        label: '表格',
        value: '.xls,.xlsx'
      },
      {
        label: '表格',
        value: '.xls,.xlsx'
      },
      {
        label: 'word',
        value: '.doc,.docx'
      },
      {
        label: 'pdf',
        value: '.pdf'
      }
    ];
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 15 },
      currentIdFormAttr,
      currentIdComponentAttr,
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
      tooltipPlacement,
      uploadAccept,
      moment
    };
  }
});
</script>

<style lang="less" scoped>
.label-icon {
  font-size: 14px;
  margin-left: 4px;
}
.ant-tabs-tabpane {
  height: 100%;
  box-sizing: border-box;
}
.making-form-right {
  height: 100%;
  overflow-y: auto;
}
</style>
