window.BENCHMARK_DATA = {
  "lastUpdate": 1694059523456,
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
          "id": "700d014b7cabf220e7891ba1c4c5dfa924e3d8b1",
          "message": "Remove trie mutation from Account",
          "timestamp": "2023-09-07T12:47:30+09:00",
          "tree_id": "4a7a764a6352819fe691068027abef975c3a4ed5",
          "url": "https://github.com/greymistcube/libplanet/commit/700d014b7cabf220e7891ba1c4c5dfa924e3d8b1"
        },
        "date": 1694059497356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373940,
            "unit": "ns",
            "range": "± 25019.443867291924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2556354.054054054,
            "unit": "ns",
            "range": "± 122679.85196938376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1791669,
            "unit": "ns",
            "range": "± 146789.34380102446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4591383.783783784,
            "unit": "ns",
            "range": "± 228938.04212208232"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46959.13978494624,
            "unit": "ns",
            "range": "± 3160.4291315365977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7940338.70967742,
            "unit": "ns",
            "range": "± 241747.3456281983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20542823.076923076,
            "unit": "ns",
            "range": "± 166323.40060780259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53306942.307692304,
            "unit": "ns",
            "range": "± 332922.63981676596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105225103.33333333,
            "unit": "ns",
            "range": "± 1485258.652734873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211145313.33333334,
            "unit": "ns",
            "range": "± 2236472.9655249156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4535969.0625,
            "unit": "ns",
            "range": "± 17858.96330306393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1452072.881610577,
            "unit": "ns",
            "range": "± 1687.7737409050867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1057657.6822916667,
            "unit": "ns",
            "range": "± 3800.8757683940453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664307.9166666665,
            "unit": "ns",
            "range": "± 8409.16467180465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846265.7747395834,
            "unit": "ns",
            "range": "± 3940.213628553298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763736.4322916666,
            "unit": "ns",
            "range": "± 2429.4089045096935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354431.8181818184,
            "unit": "ns",
            "range": "± 81232.9828999435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3620664.285714286,
            "unit": "ns",
            "range": "± 118687.6158526846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4262513.333333333,
            "unit": "ns",
            "range": "± 67393.34289576877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3933292.1052631577,
            "unit": "ns",
            "range": "± 132519.40731216312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6023223.529411765,
            "unit": "ns",
            "range": "± 123302.55740155882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251421.9512195122,
            "unit": "ns",
            "range": "± 9038.155569448945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244668.6274509804,
            "unit": "ns",
            "range": "± 9659.575357045018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218278.49462365592,
            "unit": "ns",
            "range": "± 12315.992161681545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4229869.230769231,
            "unit": "ns",
            "range": "± 67675.9359572685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868273.3333333335,
            "unit": "ns",
            "range": "± 71716.21122438741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24063.157894736843,
            "unit": "ns",
            "range": "± 2534.6976248207825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103108.0808080808,
            "unit": "ns",
            "range": "± 13085.59479645755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81291.75257731958,
            "unit": "ns",
            "range": "± 7150.34483584377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87729.47368421052,
            "unit": "ns",
            "range": "± 10019.362888865151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6117.708333333333,
            "unit": "ns",
            "range": "± 978.5052824176776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20776.76767676768,
            "unit": "ns",
            "range": "± 2377.566423580293"
          }
        ]
      }
    ]
  }
}