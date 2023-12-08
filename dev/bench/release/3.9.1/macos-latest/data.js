window.BENCHMARK_DATA = {
  "lastUpdate": 1702006100920,
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
          "id": "88249371b08e6728369e085f41db075312dab916",
          "message": "Release 3.9.1",
          "timestamp": "2023-12-08T12:02:54+09:00",
          "tree_id": "9bee94af45c895ba31e0991f1abcb83f913c2b87",
          "url": "https://github.com/greymistcube/libplanet/commit/88249371b08e6728369e085f41db075312dab916"
        },
        "date": 1702006086841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7673200.083333333,
            "unit": "ns",
            "range": "± 104313.13966868163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19197353.48,
            "unit": "ns",
            "range": "± 496935.2401016085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47992534.333333336,
            "unit": "ns",
            "range": "± 1785121.030332372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97682874.72916667,
            "unit": "ns",
            "range": "± 3827100.827941015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199170540.74358973,
            "unit": "ns",
            "range": "± 10193295.839494206"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37398.988764044945,
            "unit": "ns",
            "range": "± 6545.217864792554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224051.75789473683,
            "unit": "ns",
            "range": "± 18691.156178004312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222478.09793814432,
            "unit": "ns",
            "range": "± 21847.734020402335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202002.72448979592,
            "unit": "ns",
            "range": "± 21691.036983942828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3721683.15,
            "unit": "ns",
            "range": "± 84788.01452494084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3876696.4183673467,
            "unit": "ns",
            "range": "± 292434.66807233327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19424.478723404256,
            "unit": "ns",
            "range": "± 3726.0335124769854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82181.37894736842,
            "unit": "ns",
            "range": "± 12874.765330791717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80813.85483870968,
            "unit": "ns",
            "range": "± 11346.79488229966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81604.5947368421,
            "unit": "ns",
            "range": "± 12927.199533059167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6717.666666666667,
            "unit": "ns",
            "range": "± 1261.6109478256235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19887.115789473683,
            "unit": "ns",
            "range": "± 3417.41829538017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1096056.775510204,
            "unit": "ns",
            "range": "± 76826.14477091412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2910925.085106383,
            "unit": "ns",
            "range": "± 226899.70229893984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1947002.9662921347,
            "unit": "ns",
            "range": "± 164176.93558810605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8727707.884210527,
            "unit": "ns",
            "range": "± 886051.703360606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3013295.329113924,
            "unit": "ns",
            "range": "± 156153.21866693665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2995270.662337662,
            "unit": "ns",
            "range": "± 152936.19835628828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3647072.4,
            "unit": "ns",
            "range": "± 175802.00860292578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3470576.76,
            "unit": "ns",
            "range": "± 139555.9181742266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13914859.454545455,
            "unit": "ns",
            "range": "± 2170189.4425843516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5897196.90242513,
            "unit": "ns",
            "range": "± 635637.507127152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1666407.8269470844,
            "unit": "ns",
            "range": "± 161496.2916982973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1075254.161525451,
            "unit": "ns",
            "range": "± 117721.48308445043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582728.3510903157,
            "unit": "ns",
            "range": "± 379696.9836724367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838428.4107638889,
            "unit": "ns",
            "range": "± 47744.33945338415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 609369.8630094234,
            "unit": "ns",
            "range": "± 51510.42903960048"
          }
        ]
      }
    ]
  }
}