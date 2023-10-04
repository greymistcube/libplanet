window.BENCHMARK_DATA = {
  "lastUpdate": 1696402083668,
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
          "id": "e141590210a6e5f95fa8f369d3ffea84eb95acf4",
          "message": "Release 3.5.0",
          "timestamp": "2023-10-04T15:29:44+09:00",
          "tree_id": "3e3fb2039e8bdf70273fc070e13a90ca8e2a47eb",
          "url": "https://github.com/greymistcube/libplanet/commit/e141590210a6e5f95fa8f369d3ffea84eb95acf4"
        },
        "date": 1696402074498,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65167.125,
            "unit": "ns",
            "range": "± 14193.163473083941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7874342.12244898,
            "unit": "ns",
            "range": "± 643746.9921731076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21040015.677083332,
            "unit": "ns",
            "range": "± 1721381.068931648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56263459.30612245,
            "unit": "ns",
            "range": "± 5602354.703101201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109785855.46938775,
            "unit": "ns",
            "range": "± 7571378.342436811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219416179.1948052,
            "unit": "ns",
            "range": "± 11135492.93138027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347564.81720430107,
            "unit": "ns",
            "range": "± 45563.331114134126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379574.2631578947,
            "unit": "ns",
            "range": "± 49830.010396455495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303094.824742268,
            "unit": "ns",
            "range": "± 39771.30372962875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4713820,
            "unit": "ns",
            "range": "± 362637.1991357502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4458608.103092783,
            "unit": "ns",
            "range": "± 369548.550138304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31403.771739130436,
            "unit": "ns",
            "range": "± 6516.986206143194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101705.70652173914,
            "unit": "ns",
            "range": "± 12807.616207277764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98809.62886597938,
            "unit": "ns",
            "range": "± 16373.928786411996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106666.39361702128,
            "unit": "ns",
            "range": "± 19271.034778795616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5541.051282051282,
            "unit": "ns",
            "range": "± 676.9618512038533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31142.67777777778,
            "unit": "ns",
            "range": "± 6680.476430947454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1385976.141304348,
            "unit": "ns",
            "range": "± 227131.88882444013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2735174.1428571427,
            "unit": "ns",
            "range": "± 407212.70660154085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2049629.092783505,
            "unit": "ns",
            "range": "± 256342.99556803453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10425736.223404255,
            "unit": "ns",
            "range": "± 1300693.6712726457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5347331.260569853,
            "unit": "ns",
            "range": "± 109768.7715489622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1685879.6929408482,
            "unit": "ns",
            "range": "± 29060.708829995405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165082.763454861,
            "unit": "ns",
            "range": "± 17860.53293251334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2733109.1911542336,
            "unit": "ns",
            "range": "± 81329.73475800054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905896.8557771381,
            "unit": "ns",
            "range": "± 18915.87545620636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843010.5021409255,
            "unit": "ns",
            "range": "± 13381.9729874265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3299066.2736842106,
            "unit": "ns",
            "range": "± 366545.3258846176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462283,
            "unit": "ns",
            "range": "± 409407.4221209813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4479376.62244898,
            "unit": "ns",
            "range": "± 651045.2110689112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4146570.175257732,
            "unit": "ns",
            "range": "± 443028.81591955567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13002491.45263158,
            "unit": "ns",
            "range": "± 1032537.0593206973"
          }
        ]
      }
    ]
  }
}