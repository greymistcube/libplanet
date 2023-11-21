window.BENCHMARK_DATA = {
  "lastUpdate": 1700538020034,
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
          "id": "9d18fcc0129e672c0be35eba54d8ce50f8b57fa9",
          "message": "Prepare 3.7.2",
          "timestamp": "2023-11-21T12:23:02+09:00",
          "tree_id": "a4b48bdf93b217e18d7fc507c9f078ceda65c009",
          "url": "https://github.com/greymistcube/libplanet/commit/9d18fcc0129e672c0be35eba54d8ce50f8b57fa9"
        },
        "date": 1700538004355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7889004.9375,
            "unit": "ns",
            "range": "± 118472.06144402077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20123769.33870968,
            "unit": "ns",
            "range": "± 906966.2518899756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48442649,
            "unit": "ns",
            "range": "± 844899.3675580542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100770650.2,
            "unit": "ns",
            "range": "± 3298743.9915092713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204376512.10714287,
            "unit": "ns",
            "range": "± 8795459.89018012"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54315.83870967742,
            "unit": "ns",
            "range": "± 15573.77032153905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232871.6966292135,
            "unit": "ns",
            "range": "± 15709.63748525993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225608.52150537635,
            "unit": "ns",
            "range": "± 18593.825651203646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223084.1182795699,
            "unit": "ns",
            "range": "± 15333.095700399086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4089324.245762712,
            "unit": "ns",
            "range": "± 180225.7148464586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3488617.6333333333,
            "unit": "ns",
            "range": "± 62745.11133132965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17134.521739130436,
            "unit": "ns",
            "range": "± 3807.576189530901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63513.405263157896,
            "unit": "ns",
            "range": "± 8096.682482000494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78129.206185567,
            "unit": "ns",
            "range": "± 15110.492395557838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90447.08888888889,
            "unit": "ns",
            "range": "± 13385.2380625826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6193.84375,
            "unit": "ns",
            "range": "± 1856.5518509669876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12715.757894736842,
            "unit": "ns",
            "range": "± 1575.2033351743696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1211578.288888889,
            "unit": "ns",
            "range": "± 160348.21460999257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3622267.409090909,
            "unit": "ns",
            "range": "± 843478.211501396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2290306.5306122447,
            "unit": "ns",
            "range": "± 645219.3044124763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8912085.869565217,
            "unit": "ns",
            "range": "± 2080312.1914809544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2971259,
            "unit": "ns",
            "range": "± 130517.68808175731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3033413.0789473685,
            "unit": "ns",
            "range": "± 101004.47711762291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3755864.9782608696,
            "unit": "ns",
            "range": "± 144205.87092186243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3631746.2333333334,
            "unit": "ns",
            "range": "± 108447.87371786704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13724999.666666666,
            "unit": "ns",
            "range": "± 2608355.623637465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4430602.85851753,
            "unit": "ns",
            "range": "± 159594.15713480907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1370998.4637276786,
            "unit": "ns",
            "range": "± 13317.963403812953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 880259.7502790178,
            "unit": "ns",
            "range": "± 8457.769330848385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1994978.6185825893,
            "unit": "ns",
            "range": "± 24687.564293372023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630040.3050362723,
            "unit": "ns",
            "range": "± 6414.275874850294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562910.2317057292,
            "unit": "ns",
            "range": "± 3312.2644266102775"
          }
        ]
      }
    ]
  }
}