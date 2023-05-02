window.BENCHMARK_DATA = {
  "lastUpdate": 1683016455228,
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
          "id": "cbe34e88fd4edd25388fae96680f03f2f0005c78",
          "message": "Changelog",
          "timestamp": "2023-05-02T17:13:12+09:00",
          "tree_id": "ce6a0112c356adf178ade77c4273046864442982",
          "url": "https://github.com/greymistcube/libplanet/commit/cbe34e88fd4edd25388fae96680f03f2f0005c78"
        },
        "date": 1683016441503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9810459.879120879,
            "unit": "ns",
            "range": "± 1998918.437545569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20830125.75,
            "unit": "ns",
            "range": "± 399859.7883291092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51412937.72,
            "unit": "ns",
            "range": "± 1365948.6187867913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106075011.16666667,
            "unit": "ns",
            "range": "± 5344031.864158365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207707269.08,
            "unit": "ns",
            "range": "± 8379128.938861468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70026.03296703297,
            "unit": "ns",
            "range": "± 10295.723533422939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325005.5268817204,
            "unit": "ns",
            "range": "± 26852.005920370997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327090.0520833333,
            "unit": "ns",
            "range": "± 33509.75772309339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295249.31111111114,
            "unit": "ns",
            "range": "± 26608.260726633456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4232196.37037037,
            "unit": "ns",
            "range": "± 178019.8638116297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3967720.459770115,
            "unit": "ns",
            "range": "± 281033.79748415947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23228.605263157893,
            "unit": "ns",
            "range": "± 5007.691767657592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105828.27472527472,
            "unit": "ns",
            "range": "± 19002.165876005896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106368.98901098901,
            "unit": "ns",
            "range": "± 13621.837406242235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114598.82795698925,
            "unit": "ns",
            "range": "± 15390.204151980723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7593.373684210526,
            "unit": "ns",
            "range": "± 1285.7277618110304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20826.01020408163,
            "unit": "ns",
            "range": "± 4993.426739523429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570351.2736842106,
            "unit": "ns",
            "range": "± 181877.94750726712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3041727.966666667,
            "unit": "ns",
            "range": "± 192285.58568010648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2639671.1808510637,
            "unit": "ns",
            "range": "± 318469.31312731554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6857926.528735632,
            "unit": "ns",
            "range": "± 688529.2338384303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343776.775862069,
            "unit": "ns",
            "range": "± 143441.9285701755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3428707.930379747,
            "unit": "ns",
            "range": "± 176492.18424953378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4506793.449438202,
            "unit": "ns",
            "range": "± 241002.59039620732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4513794.395833333,
            "unit": "ns",
            "range": "± 349502.5561744782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7919929.287356322,
            "unit": "ns",
            "range": "± 431720.470434713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7792965.046703297,
            "unit": "ns",
            "range": "± 1529409.3605018847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2151508.4893785114,
            "unit": "ns",
            "range": "± 204948.31575508448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1447535.608483356,
            "unit": "ns",
            "range": "± 182055.42700987024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850199.2509653377,
            "unit": "ns",
            "range": "± 223559.794395554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817535.9737025669,
            "unit": "ns",
            "range": "± 12435.144723783107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823952.1481370192,
            "unit": "ns",
            "range": "± 9124.894409123985"
          }
        ]
      }
    ]
  }
}