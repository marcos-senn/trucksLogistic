import { Form, Input, InputNumber, Button } from "antd";
import axios from "axios";
import { useState,useEffect } from "react";
import AlertaEnvioExitoso from "./alertaEnvioExitoso";

const Formulario = () => {
    const [form] = Form.useForm();
    const [cargando, setCargando] = useState(false);
    const [envioOk, SetEnvioOk] = useState(false);

    const onFinish = async (values: any) => {
        console.log(values);
        try {
            setCargando(true)
            const [response1] = await Promise.all([
                axios.post(
                    "https://seric.onrender.com/emailpara-seric-unnnx",
                    values
                ),
                axios.post(
                    "https://seric.onrender.com/emailpara-clte-unnny",
                    values
                ),
            ]);
            SetEnvioOk(true);
            setCargando(false);
            console.log("Emails sent successfully", response1);

            form.resetFields();
        } catch (error) {
            console.error("Error sending emails", error);
        } 
    };

    useEffect(() => {
        if (envioOk) {
            const timer = setTimeout(() => {
                SetEnvioOk(false); // Ocultar la alerta después de 5 segundos
            }, 5000);

            return () => clearTimeout(timer); // Limpiar el temporizador en el desmontaje
        }
    }, [envioOk]);

    const validateMessages = {
        required: "${label} es obligatorio!",
        types: {
            email: "${label} no es un email válido!",
            number: "${label} no es un número válido!",
        },
    };

    return (
        <div
            id="contacto"
            className="w-full flex flex-col md:flex-row-reverse justify-around md:p-8"
        >
            <Form
                form={form}
                onFinish={onFinish}
                validateMessages={validateMessages}
                layout="vertical"
                className="w-full"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        name={["user", "firstName"]}
                        label={<span className="text-black">Nombre</span>}
                        rules={[{ required: true }]}
                    >
                        <Input className="h-9 text-base" />
                    </Form.Item>
                    <Form.Item
                        name={["user", "lastName"]}
                        label={<span className="text-black">Apellido</span>}
                        rules={[{ required: true }]}
                    >
                        <Input className="h-9 text-base" />
                    </Form.Item>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        name={["user", "number"]}
                        label={<span className="text-black">Número de contacto</span>}
                        rules={[{ required: true, type: "number" }]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            className="h-9 text-base"
                        />
                    </Form.Item>
                    <Form.Item
                        name={["user", "email"]}
                        label={<span className="text-black">Correo de contacto</span>}
                        rules={[{ type: "email", required: true }]}
                    >
                        <Input className="h-9 text-base" />
                    </Form.Item>
                </div>
                <Form.Item
                    name={["user", "servicios"]}
                    label={<span className="text-black">¿Qué servicios necesita?</span>}
                >
                    <Input className="h-9 text-base" />
                </Form.Item>
                <Form.Item name={["user", "introduction"]} label={<span className="text-black">Comentarios adicionales</span>}>
                    <Input.TextArea
                        className="text-base"
                        style={{ height: "8rem", resize: "none" }}
                    />
                </Form.Item>
                <Form.Item className="flex items-center">
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "10rem" }}
                        className="bg-bronze mr-5"
                        disabled={cargando}
                    >
                        Enviar
                    </Button>
                    {cargando && (
                        <div
                            className="animate-spin inline-block w-6 h-6 border-[2px] border-current border-t-transparent text-orange-600 rounded-full"
                            role="status"
                            aria-label="loading"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    )}
                </Form.Item>
            </Form>
            {envioOk && <AlertaEnvioExitoso />}
        </div>
    );
};

export default Formulario;
