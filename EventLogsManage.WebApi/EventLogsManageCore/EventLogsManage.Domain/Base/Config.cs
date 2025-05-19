namespace EventLogsManage.Domain.Base;

public sealed class Config
{
    private static Config instance;
    private static readonly object lockObject = new();
    public string ProjectEnvironment { get { return GetEnvironmentVariable(nameof(ProjectEnvironment)); } private set { } }
    public string DatabaseConnectionString { get { return GetEnvironmentVariable(nameof(DatabaseConnectionString)); } private set { } }
    public string JwtSecret { get { return GetEnvironmentVariable(nameof(JwtSecret)); } private set { } }
    private Config()
    {
    }
    public static Config Instance
    {
        get
        {
            // Bloqueo doble para garantizar la seguridad de hilos
            if (instance == null)
            {
                lock (lockObject)
                {
                    instance ??= new Config();
                }
            }
            return instance;
        }
    }
    private string GetEnvironmentVariable(string variableName)
    {
        string? value = Environment.GetEnvironmentVariable(variableName);
        if (string.IsNullOrEmpty(value))
            throw new Exception($"La variable {variableName} no esta configurada.");
        return value!;
    }
}