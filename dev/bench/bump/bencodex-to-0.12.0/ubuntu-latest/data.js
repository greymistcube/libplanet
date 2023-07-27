window.BENCHMARK_DATA = {
  "lastUpdate": 1690444564347,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "fc7c052061aac1654db2c548bd9a3f3a9553f8fa",
          "message": "Bump bencodex to 0.12.0",
          "timestamp": "2023-07-27T16:41:57+09:00",
          "tree_id": "f24002a0214c9431068a6f86c999ef138ed9f6c4",
          "url": "https://github.com/greymistcube/libplanet/commit/fc7c052061aac1654db2c548bd9a3f3a9553f8fa"
        },
        "date": 1690444556602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303273.8484848485,
            "unit": "ns",
            "range": "± 14258.766107197596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289585.625,
            "unit": "ns",
            "range": "± 10285.231731898224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267610.4054054054,
            "unit": "ns",
            "range": "± 8236.69013034382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4374322.642857143,
            "unit": "ns",
            "range": "± 36541.12214942995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846026.0714285714,
            "unit": "ns",
            "range": "± 26326.84196336006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22114.80412371134,
            "unit": "ns",
            "range": "± 1818.9759460979187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98227.83157894737,
            "unit": "ns",
            "range": "± 6697.158232927194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80633.46391752578,
            "unit": "ns",
            "range": "± 6068.469423760985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96378.10112359551,
            "unit": "ns",
            "range": "± 9254.654706054363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5916.98969072165,
            "unit": "ns",
            "range": "± 749.688150372726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22460.260416666668,
            "unit": "ns",
            "range": "± 1916.780767437076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1457354.77,
            "unit": "ns",
            "range": "± 112226.42666771107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2716721.7804878047,
            "unit": "ns",
            "range": "± 97717.10612285657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1827278.0697674418,
            "unit": "ns",
            "range": "± 97909.48051083183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4897387.703703703,
            "unit": "ns",
            "range": "± 134066.3128951246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6409102.333854167,
            "unit": "ns",
            "range": "± 33136.21805289366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929477.0069010416,
            "unit": "ns",
            "range": "± 9355.437996680543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381900.2716145834,
            "unit": "ns",
            "range": "± 1161.2944978357732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552706.144856771,
            "unit": "ns",
            "range": "± 1841.293716352952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802503.453125,
            "unit": "ns",
            "range": "± 946.6476074355575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730326.4061848958,
            "unit": "ns",
            "range": "± 1260.0406481556195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3498411.066666667,
            "unit": "ns",
            "range": "± 51831.4258003312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3610466.6315789474,
            "unit": "ns",
            "range": "± 75297.65333676337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4400066.555555556,
            "unit": "ns",
            "range": "± 92014.45617767461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3929064.1333333333,
            "unit": "ns",
            "range": "± 132121.18508513313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6400426.466666667,
            "unit": "ns",
            "range": "± 102288.75093148713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7868377.2,
            "unit": "ns",
            "range": "± 42617.943999480514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19904435.133333333,
            "unit": "ns",
            "range": "± 83425.31466087897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51322977.6,
            "unit": "ns",
            "range": "± 350672.82222562627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101688823.46666667,
            "unit": "ns",
            "range": "± 150119.86521722598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203351884.5,
            "unit": "ns",
            "range": "± 386566.98935625836"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52982.979166666664,
            "unit": "ns",
            "range": "± 4040.7232572482203"
          }
        ]
      }
    ]
  }
}