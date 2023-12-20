window.BENCHMARK_DATA = {
  "lastUpdate": 1703040494975,
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
          "id": "10880c93f390657fae7c733fbce4e26ddeaa2281",
          "message": "More strict conditions for TxInvoice gas arguments",
          "timestamp": "2023-12-20T11:35:28+09:00",
          "tree_id": "ecc9df8922443ee164d6e95078e2f2b4ec6240b4",
          "url": "https://github.com/greymistcube/libplanet/commit/10880c93f390657fae7c733fbce4e26ddeaa2281"
        },
        "date": 1703040473184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964431.3131313132,
            "unit": "ns",
            "range": "± 110246.36108249359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1743555.294117647,
            "unit": "ns",
            "range": "± 83673.96407070315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1347229,
            "unit": "ns",
            "range": "± 130149.00884770657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5415310,
            "unit": "ns",
            "range": "± 239001.03659090147"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35722.05882352941,
            "unit": "ns",
            "range": "± 1603.2472261413513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5275200,
            "unit": "ns",
            "range": "± 69261.64677717182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13448593.333333334,
            "unit": "ns",
            "range": "± 143346.18668836376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33897613.333333336,
            "unit": "ns",
            "range": "± 470844.4782161799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66405221.428571425,
            "unit": "ns",
            "range": "± 949307.5485917021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129633860,
            "unit": "ns",
            "range": "± 1191463.6423923548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3304998.798076923,
            "unit": "ns",
            "range": "± 6977.824423328429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076547.6841517857,
            "unit": "ns",
            "range": "± 2271.4667360349144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763214.5228794643,
            "unit": "ns",
            "range": "± 1270.2781592064816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930936.3560267857,
            "unit": "ns",
            "range": "± 2215.479729124983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625287.8380408654,
            "unit": "ns",
            "range": "± 910.3952141528375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572756.7301432291,
            "unit": "ns",
            "range": "± 970.5081827449632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2140698.5714285714,
            "unit": "ns",
            "range": "± 69403.34104277084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2235465.5172413792,
            "unit": "ns",
            "range": "± 53968.8685120682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2870807.1428571427,
            "unit": "ns",
            "range": "± 50709.773208929844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2693375.5555555555,
            "unit": "ns",
            "range": "± 101483.99819128575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5962400,
            "unit": "ns",
            "range": "± 110883.70785046226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178046.7741935484,
            "unit": "ns",
            "range": "± 7664.773963750574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173967.33333333334,
            "unit": "ns",
            "range": "± 7869.293270464419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143871.42857142858,
            "unit": "ns",
            "range": "± 2498.131169626475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2800853.846153846,
            "unit": "ns",
            "range": "± 36367.03212582827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2611214.285714286,
            "unit": "ns",
            "range": "± 44295.05714989075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12438.144329896908,
            "unit": "ns",
            "range": "± 2250.3908595216426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57541.237113402065,
            "unit": "ns",
            "range": "± 7896.4885732166795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43601.470588235294,
            "unit": "ns",
            "range": "± 1970.5664498946476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53668.23529411765,
            "unit": "ns",
            "range": "± 7133.576071159906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2501.0526315789475,
            "unit": "ns",
            "range": "± 412.9537444712039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10181.91489361702,
            "unit": "ns",
            "range": "± 1678.6427419330807"
          }
        ]
      }
    ]
  }
}