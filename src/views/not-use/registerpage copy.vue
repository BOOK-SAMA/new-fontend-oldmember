<!-- <template>
    <div class="root vh-200">

        <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
            สมัครสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร (ศวศ.)
        </h1>
         <div class="card-body">
            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Username</h6>
                </div>
                <div class="col-md-9 pe-5">
                    <input type="text" class="form-control form-control-lg" v-model="state.username" />
                    <span v-if="v$.username.$error">
                        {{ v$.username.$errors[0].$message }}
                    </span>
                </div>
            </div>
        </div> 
        <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
            <div class="card-body">
            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Username</h6>
                </div>
                <div class="col-md-9 pe-5">
                    <input type="text" class="form-control form-control-lg" v-model="state.username" />
                    <span v-if="v$.username.$error">
                        {{ v$.username.$errors[0].$message }}
                    </span>
                </div>
            </div>
        </div>
        </div>
        <p>
            <input type="text" placeholder="Email" v-model="state.email" />
            <span v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
            </span>
        </p>
        <p>
            <input type="password" placeholder="Password" v-model="state.password.password" />
            <span v-if="v$.password.password.$error">
                {{ v$.password.password.$errors[0].$message }}
            </span>
        </p>
        <p>
            <input type="password" placeholder="Confirm Password" v-model="state.password.confirm" />
            <span v-if="v$.password.confirm.$error">
                {{ v$.password.confirm.$errors[0].$message }}
            </span>
        </p>
        <button @click="submitForm">Submit</button>
    </div>
</template> -->
<template>
    <section class="vh-200" style="
        background-image: url(https://v3i.rweb-images.com/www.scsualumni.net/images/background/main/crop-1702428316.jpg?1702428316);
        background-repeat: no-repeat;
      ">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xxl">
                    <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
                        สมัครสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร (ศวศ.)
                    </h1>

                    <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
                        <div class="card-body">
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">Username<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                                              <span v-if="v$.username.$error" class="text-danger fw-bold">
                                        {{ v$.username.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" v-model="state.username" />
                                </div>
                            </div>

                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รหัสผ่าน<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.password.$error" class="text-danger fw-bold">
                                        {{ v$.password.$errors[0].$message }}
                                    </span>
                                    <input :type="inputType" id="myInput" v-model="state.password"
                                        class="form-control form-control-lg" />
                                </div>
                                <button @click="togglePassword" class="mt-2">
                                    Toggle Password
                                </button>
                            </div>

                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ยืนยันรหัสผ่าน<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.confirmpassword.$error" class="text-danger fw-bold">
                                        {{ v$.confirmpassword.$errors[0].$message }}
                                    </span>
                                    <input :type="inputType" id="myInput" v-model="state.confirmpassword"
                                        class="form-control form-control-lg" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ชื่อภาษาไทย<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                                                    <span v-if="v$.thainame.$error" class="text-danger fw-bold">
                                        {{ v$.thainame.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" v-model="state.thainame" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ชื่อภาษาอังกฤษ<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                 <span v-if="v$.engname.$error" class="text-danger fw-bold">
                                        {{ v$.engname.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" v-model="state.engname" />
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ชื่อ - นามสกุลเดิม (ถ้ามี)</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="oldname" />
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ชื่อเล่น</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="nickname" />
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h5 class="mb-0">วันเดือนปีเกิด</h5>
                                </div>
                                <div class="col-md-3 pe-2">
                                    <h6 class="mb-0">วัน</h6>
                                    <select v-model="day" class="form-control">
                                        <option v-for="d in days" :key="d">{{ d }}</option>
                                    </select>
                                </div>
                                <div class="col-md-3 pe-2">
                                    <h6 class="mb-0">เดือน</h6>
                                    <select v-model="month" class="form-control">
                                        <option v-for="m in months" :key="m">{{ m }}</option>
                                    </select>
                                </div>
                                <div class="col-md-3 pe-5">
                                    <h6 class="mb-0">ปีที่เกิด</h6>
                                    <select v-model="year" class="form-control">
                                        <option v-for="y in years" :key="y">{{ y }}</option>
                                    </select>
                                </div>

                                <!-- ช่องวันเกิด ใช้ date แทน @-->
                                <hr class="mx-n3" />
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">สถานะของผู้สมัคร</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <select v-model="status" class="custom-select my-1 mr-sm-2"
                                        id="inlineFormCustomSelectPref">
                                        <option selected disabled>
                                            เคยเป็นนักศึกษา/เป็นผู้สำเร็จการศึกษา/เป็นนักศึกษา...
                                        </option>
                                        <option value="เคยเป็นนักศีกษา">เคยเป็นนักศีกษา</option>
                                        <option value="เป็นผู้สำเร็จการศึกษา">
                                            เป็นผู้สำเร็จการศึกษา
                                        </option>
                                        <option value="เป็นนักศึกษาปัจจุบัน">
                                            เป็นนักศึกษาปัจจุบัน
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <!-- ช่องสถานะของผู้สมัคร เช่น จบยังไม่จบ @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ระดับปริญญาตรี สาขาวิชาเอก</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <textarea v-model="academicstatus" class="form-control" rows="1"></textarea>
                                </div>
                            </div>
                            <!-- ช่องสาขาปีตรี @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รหัสประจำตัวระดับปริญญาตรี</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <textarea v-model="academicnumber" class="form-control" rows="1"
                                        placeholder=""></textarea>
                                </div>
                            </div>
                            <!-- ช่องสาขาปีตรี รหัส @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ปริญญาโท สาขาวิชาเอก</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <textarea v-model="masterdegree" class="form-control" rows="1"
                                        placeholder=""></textarea>
                                </div>
                            </div>
                            <!-- ช่องสาขาปีโท @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รหัสประจำตัวระดับปริญญาโท</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <textarea v-model="masterdegreenumber" class="form-control" rows="1"
                                        placeholder=""></textarea>
                                </div>
                            </div>
                            <!-- ช่องสาขาปีโท รหัส @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ระดับปริญญาเอก</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <textarea v-model="doctordegree" class="form-control" rows="ๅ"
                                        placeholder=""></textarea>
                                </div>
                            </div>
                            <!-- ช่องสาขาปีเอก @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รหัสประจำตัวระดับปริญญาเอก</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <textarea v-model="doctordegreenumber" class="form-control" rows="1"
                                        placeholder=""></textarea>
                                </div>
                            </div>
                            <!-- ช่องสาขาปีเอก รหัส @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ข้อมูลที่อยู่ปัจจุบัน (เพื่อการจัดส่งของที่ระลึก)<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                        <span v-if="v$.address.$error" class="text-danger fw-bold">
                                        {{ v$.address.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="state.address" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">หมายเลขโทรศัพท์<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                                                    <span v-if="v$.phonenumber.$error" class="text-danger fw-bold">
                                        {{ v$.phonenumber.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="state.phonenumber" />
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">โทรสาร</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="phonemail" />
                                </div>
                            </div>
                            <!-- ช่องโทรสาร @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">
                                        ID Line หรือ ช่องทางการติดต่อโซเชียลแอพพลิเคชั่นอื่นๆ
                                    </h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="Idline" />
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">อีเมล<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                                                    <span v-if="v$.email.$error" class="fw-bold text-danger">
                                        {{ v$.email.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="state.email" />
                                </div>
                            </div>
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">อาชีพ</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="email" class="form-control form-control-lg" placeholder=""
                                        v-model="job" />
                                </div>
                            </div>
                            <!-- ช่องอาชีพ @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ตำแหน่ง</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <textarea v-model="jobposition" class="form-control" rows="1"
                                        placeholder=""></textarea>
                                </div>
                            </div>
                            <!-- ช่องตำแหน่ง @-->
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ชื่อและที่อยู่ของสถานที่ทำงาน</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <textarea v-model="jobaddress" class="form-control" rows="2"
                                        placeholder=""></textarea>
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-6 ps-5">
                                    <h6 class="mb-0">
                                        ขอสมัครเป็นสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์
                                        มหาวิทยาลัยศิลปากร
                                        โดยยินดีปฏิบัติตามระเบียบข้อบังคับของสมาคมฯ ทุกประการ
                                    </h6>
                                </div>
                                <div class="col-md-5 pe-5">
                                    <span v-if="v$.username.$error" class="text-danger">
                                            {{ v$.levelmember.$errors[0].$message }}
                                     </span>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                                        v-model="levelmember">
                                        <option selected disabled>เลือก 1 อย่าง</option>
                                        <option value="สมาชิกสามัญ ">
                                            สมาชิกสามัญ (ผู้จบการศึกษา SCSU ชำระค่าบำรุงสมาคมตลอดชีพ
                                            500 บาท)
                                        </option>
                                        <option value="สมาชิกวิสามัญ">
                                            สมาชิกวิสามัญ (ผู้สนใจทั่วไปชำระค่าบำรุงสมาคมตลอดชีพ 500
                                            บาท)
                                        </option>
                                        <option value="ยุวสมาชิก">
                                            ยุวสมาชิก (นักศึกษา SCSU ปัจจุบันไม่ต้องชำระค่าบำรุงสมาคม)
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-6 ps-5">
                                    <h6 class="mb-0">
                                        กรณีสมัครสมาชิกสามัญและ วิสามัญกรุณาเลือกของชำร่วย (1 อย่าง)
                                    </h6>
                                </div>
                                <div class="col-md-5 pe-5">
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                                        v-model="levelmemberthing">
                                        <option selected disabled>เลือก 1 อย่าง</option>
                                        <option value="ไม่รับของชำร่วย">
                                            ไม่รับของชำร่วย(เป็นยุวสมาชิก)
                                        </option>
                                        <option value="กระเป๋าผ้าและแมส SCSU ">
                                            กระเป๋าผ้าและแมส SCSU
                                        </option>
                                        <option value="เหรียญ อ.ศิลป ทอง">เหรียญ อ.ศิลป ทอง</option>
                                        <option value="เหรียญ อ.ศิลป เงิน">
                                            เหรียญ อ.ศิลป เงิน
                                        </option>
                                        <option value="เหรียญ อ.ศิลป ทองแดง">
                                            เหรียญ อ.ศิลป ทองแดง
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รูปถ่าย</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input ref="fileInput" class="form-control form-control-lg" id="formFileLg"
                                        type="file" @change="handleprofile" />
                                    <div class="small text-muted mt-2">
                                        (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                                    </div>
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-5 ps-5">
                                    <h6 class="mb-0">
                                        การส่งใบสมัครเป็นสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์
                                        มหาวิทยาลัยศิลปากร ให้ทำการเลือก "ยืนยัน"
                                        ว่าข้อมูลดังกล่าวถูกต้อง/ครบถ้วน
                                        และพิมพ์ใบสมัครเพื่อส่งมาทาง scsualumni@hotmail.com
                                    </h6>
                                </div>
                                <div class="col-md-5 pe-5">
                                    <div class="form-check form-check-inline">
                                        <input v-model="statusinfo" class="form-check-input" type="checkbox"
                                            id="inlineCheckbox1" value="ยืนยัน" />
                                        <label class="form-check-label" for="inlineCheckbox1">ยืนยัน</label>
                                    </div>
                                    <h6 class="mb-0"># ถ้าไม่กด ยืนยัน จะกดปุ่น Submit ไม่ได้นะครับ #</h6>
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-5 ps-5">
                                    <h6 class="mb-0">
                                        สมาคมศิษย์เก่า คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร
                                        มีนโยบายคุ้มครองข้อมูลส่วนบุคคลของสมาคม
                                        ซึ่งมีข้อกำหนดการปฏิบัติ ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                                        ซึ่งมีรายละเอียดในเวปไซด์ของสมาคมตามลิ้งค์ดังนี้
                                        <a href="http://www.scsualumni.net/attachments/view/?attach_id=268068"
                                            class="badge badge-primary">นโยบายคุ้มครองข้อมูลส่วนบุคคล
                                            สำหรับสมาชิกสมาคม</a>
                                    </h6>
                                </div>
                                <div class="col-md-5 pe-5">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                            value="ยืนยัน" v-model="pnstatus" />
                                        <label class="form-check-label" for="inlineCheckbox1">ยืนยัน</label>

                                    </div>
                                    <h6 class="mb-0"># ถ้าไม่กด ยืนยัน จะกดปุ่น Submit ไม่ได้นะครับ #</h6>
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <hr class="mx-n2" />
                            <h6 class="mb-0">
                                ส่งใบสมัคร สอบถามข้อมูลเพิ่มเติมติดต่อ scsualumni@hotmail.com
                            </h6>
                            <div class="col-md-9 pe-5">
                                <button type="submit" class="btn btn-primary btn-lg text-white" @click="submit()"
                                    :disabled="!this.statusinfo || !this.pnstatus">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import router from "@/router";
import { ref, reactive, computed } from "vue";
import axios from "axios";
import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers, sameAs , numeric } from '@vuelidate/validators'


export default {

    setup() {
        const isEnglishOrThai = (value) => {
            // Regular expression to match Thai characters
            const thaiRegex = new RegExp(/[\u0E00-\u0E7F]/);

            // Check if the value contains any Thai characters
            if (thaiRegex.test(value)) {
                return false; // Return false if Thai characters are found
            }

            return true; // Return true if the value is in English
        };

        const state = reactive({
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            thainame: '',
            engname: '',
            address: '',
            phonenumber: '',
            levelmember: "",

        })
        const rules = computed(() => {
            return {
                username: { required: helpers.withMessage('กรุณาใส่ข้อมูล Username', required) },
                password: { required: helpers.withMessage('กรุณาใส่ข้อมูล Password', required) },
                confirmpassword: { required: helpers.withMessage('กรุณาใส่ข้อมูล confirmpassword', required), sameAs: helpers.withMessage('กรุณาใส่ข้อมูล confirmpassword ให้ตรงกับ password ด้วยนะครับ', sameAs(state.password)) },
                thainame: { required: helpers.withMessage('กรุณาใส่ข้อมูล ชื่อภาษาไทย ด้วยนะครับ', required) },
                engname: { required: helpers.withMessage('กรุณาใส่ข้อมูล ชื่อภาษาอังกฤษ ด้วยนะครับ', required), isEnglishOrThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาอังกฤษเท่านั้น', isEnglishOrThai) },
                address: { required: helpers.withMessage('กรุณาใส่ข้อมูล ที่อยู่ ด้วยนะครับ', required) },
                phonenumber: { required: helpers.withMessage('กรุณาใส่ข้อมูล เบอร์โทรศัพท์ ด้วยนะครับ', required) , numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric)},
                email: { required: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ด้วยนะครับ', required), email: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ให้ตรงแบบฟอร์มด้วยนะครับ ', email) },
                levelmember: { required: helpers.withMessage('กรุณาใส่ข้อมูลในช่องนี้ด้วยนะครับ', required) },
            }
        })

        const v$ = useValidate(rules, state)
        return {
            rules,
            state,
            v$
        }
    },

    data() {
        return {
            date: "",
            inputType: "password",
            oldname: "",
            nickname: "",
            days: Array.from({ length: 31 }, (_, i) => i + 1),
            months: Array.from({ length: 12 }, (_, i) => i + 1),
            years: Array.from(
                { length: 100 },
                (_, i) => new Date().getFullYear() - i
            ),
            dateofbirth: "",
            oldname: "",

            status: "",
            academicstatus: "",
            academicnumber: "",
            masterdegree: "",
            masterdegreenumber: "",
            doctordegree: "",
            doctordegreenumber: "",

            phonemail: "",
            Idline: "",
            job: "",
            jobposition: "",
            jobaddress: "",
            
            levelmemberthing: "",
            file: null,
            statusinfo: false,
            pnstatus: false,
        };
    },

    methods: {

        togglePassword() {
            this.inputType = this.inputType === "password" ? "text" : "password";
        },
        handleprofile(event) {
            this.file = event.target.files[0];
        },
        formatdate(dateofbirth) {
            const day = dateofbirth.getDate();
            const month = dateofbirth.getMonth() + 1;
            const year = dateofbirth.getFullYear();
            this.date = `${day}/${month}/${year}`;
            return `คุณเกิดวันที่ ${day}/${month}/${year}`;
        },
        submit() {
            console.log(this.v$)
            this.v$.$validate() // checks all inputs
            console.log(this.v$.$validate())
            if (this.v$.$error) {
                // if ANY fail validation
                alert('Form failed validation')

            } else {
                const URL = `${import.meta.env.VITE_API}register2`;
                let data = new FormData();


                data.append("username", this.state.username);
                data.append("password", this.state.password);
                data.append("confirmpassword", this.state.confirmpassword);

                data.append("thainame", this.state.thainame);
                data.append("engname", this.state.engname);
                data.append("oldname", this.oldname);
                data.append("nickname", this.nickname);
                data.append("dateofbirth", `${this.day}/${this.month}/${this.year}`);

                data.append("status", this.status);
                data.append("academicstatus", this.academicstatus);
                data.append("academicnumber", this.academicnumber);
                data.append("masterdegree", this.masterdegree);
                data.append("masterdegreenumber", this.masterdegreenumber);
                data.append("doctordegree", this.doctordegree);
                data.append("doctordegreenumber", this.doctordegreenumber);

                data.append("address", this.state.address);
                data.append("phonenumber", this.state.phonenumber);
                data.append("phonemail", this.phonemail);
                data.append("idline", this.Idline);
                data.append("email", this.state.email);
                data.append("job", this.job);
                data.append("jobposition", this.jobposition);
                data.append("jobaddress", this.jobaddress);
                data.append("levelmember", this.levelmember);
                data.append("levelmemberthing", this.levelmemberthing);
                data.append("statusinfo", this.statusinfo);
                data.append("file", this.file);
                data.append("PNstatus", this.pnstatus);
                let config = {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                };

                axios.post(URL, data, config).then((response) => {
                    // console.log("this is res => ", this.date);
                    this.responseStatus = response.status
                    console.log("this is res => ", response);
                    alert("การสมัครสมาชิกสำเร็จแล้ว")
                    window.location.href = "https://graduation-silpakorn.azurewebsites.net/";

                }).catch((error) => {
                    alert(error.response.data.Text);
                    
                });
            }
        },
    },
};
</script>




















<!-- <style lang="css">
.root {

    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    margin-top: 100px;
    border-radius: 20px;
}

input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
}

button {
    background-color: #3498db;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    color: white;
}
</style> -->


<!-- <script>
import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
    setup() {

        const state = reactive({
            username: '',
            email: '',
            
            password: '',
            confirmpassword: '',
        })

        const mustBeLearnVue = (value) => value.includes('learnvue')





        const rules = computed(() => {
            return {
                username: { required: helpers.withMessage('กรุณาใส่ข้อมูล Username', required) },
                email: { required, email, mustBeLearnVue: helpers.withMessage('Must be @learnvue', mustBeLearnVue) },
                password: { required },
                confirmpassword: { required, sameAs: sameAs(state.password) },

                // passwordtest: {
                //     passwordwww: { required, minLength: helpers.withMessage('มีมากกว่า  6 ตัว', minLength(6)) },
                //     confirmwwww: { required, sameAs: sameAs(state.password.password) },
                // }
            }
        })

        const v$ = useValidate(rules, state)
        return {
            rules,
            state,
            v$
        }
    },
    data:{
        return
    },
    methods: {
        submitForm() {
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                // if ANY fail validation
                alert('Form successfully submitted.')
            } else {
                alert('Form failed validation')
            }
        },
        togglePassword() {
            this.inputType = this.inputType === "password" ? "text" : "password";
        },
    },
}


</script> -->
