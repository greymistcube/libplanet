window.BENCHMARK_DATA = {
  "lastUpdate": 1683783124792,
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
          "id": "458a860c655f755fedf1e7f39ced14d000478850",
          "message": "Introduce IndexedActionLoader",
          "timestamp": "2023-05-10T20:49:33+09:00",
          "tree_id": "012e410a2d3dee29535205ae538639da96d7e320",
          "url": "https://github.com/greymistcube/libplanet/commit/458a860c655f755fedf1e7f39ced14d000478850"
        },
        "date": 1683720169015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279729.01960784313,
            "unit": "ns",
            "range": "± 10149.13973790921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268530.3076923077,
            "unit": "ns",
            "range": "± 2732.6950184941174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236489.55,
            "unit": "ns",
            "range": "± 5210.479445310191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242360.133333334,
            "unit": "ns",
            "range": "± 23589.34505802708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729865.4285714286,
            "unit": "ns",
            "range": "± 19962.394590885076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17831.239583333332,
            "unit": "ns",
            "range": "± 1180.1931754883597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84383.25,
            "unit": "ns",
            "range": "± 3959.241650071636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72954.66666666667,
            "unit": "ns",
            "range": "± 2630.7157948923204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89091.77551020408,
            "unit": "ns",
            "range": "± 11373.896764019328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4860.204301075269,
            "unit": "ns",
            "range": "± 481.184195029842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17681.239583333332,
            "unit": "ns",
            "range": "± 1479.1448934028826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272828.533333333,
            "unit": "ns",
            "range": "± 33769.43708627387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3467845,
            "unit": "ns",
            "range": "± 70450.70425147936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4220360.5,
            "unit": "ns",
            "range": "± 85028.53714817646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4232010.655172414,
            "unit": "ns",
            "range": "± 115059.97413966207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6633114.5,
            "unit": "ns",
            "range": "± 75427.3768177046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6200202.735491072,
            "unit": "ns",
            "range": "± 11797.545434279009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836176.2447916667,
            "unit": "ns",
            "range": "± 506.0691265374599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365051.6463448661,
            "unit": "ns",
            "range": "± 454.17112163204104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2514759.728125,
            "unit": "ns",
            "range": "± 1377.7484254241797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796765.335546875,
            "unit": "ns",
            "range": "± 675.9720244113657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730919.3781550481,
            "unit": "ns",
            "range": "± 551.7362103392078"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45796.56179775281,
            "unit": "ns",
            "range": "± 2467.476982277537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7621752.5,
            "unit": "ns",
            "range": "± 28393.40424424171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19404656.533333335,
            "unit": "ns",
            "range": "± 96054.13231303234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49858049.13333333,
            "unit": "ns",
            "range": "± 389350.2104939655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100285523.06666666,
            "unit": "ns",
            "range": "± 280266.2333066968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199036406.2857143,
            "unit": "ns",
            "range": "± 543979.7309100671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362073.3870967743,
            "unit": "ns",
            "range": "± 78024.8302984979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2519912.0434782607,
            "unit": "ns",
            "range": "± 55534.98894102566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154186.345454545,
            "unit": "ns",
            "range": "± 83084.22737783054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5116069.16,
            "unit": "ns",
            "range": "± 118159.36822137012"
          }
        ]
      },
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
          "id": "fe317ba5eac6d7b8038772df6772515155e5c863",
          "message": "Simple renaming",
          "timestamp": "2023-05-11T14:18:31+09:00",
          "tree_id": "add43c9de0533eb4bf46a9fcf89c94180ef0279e",
          "url": "https://github.com/greymistcube/libplanet/commit/fe317ba5eac6d7b8038772df6772515155e5c863"
        },
        "date": 1683783117667,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284938.53571428574,
            "unit": "ns",
            "range": "± 7307.652379182629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280608.35294117645,
            "unit": "ns",
            "range": "± 6682.421181080606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247759.05405405405,
            "unit": "ns",
            "range": "± 8220.314555166724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4413814.428571428,
            "unit": "ns",
            "range": "± 63649.04965235814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4096929.6,
            "unit": "ns",
            "range": "± 27544.62545916561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19262.936170212764,
            "unit": "ns",
            "range": "± 1483.1689613543565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90674.52083333333,
            "unit": "ns",
            "range": "± 5801.387434742008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76759.12631578947,
            "unit": "ns",
            "range": "± 4783.8068483790175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92245.25806451614,
            "unit": "ns",
            "range": "± 11167.656550233945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5453.177083333333,
            "unit": "ns",
            "range": "± 827.7931090974957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19987.40425531915,
            "unit": "ns",
            "range": "± 1510.6628276708302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432670.9,
            "unit": "ns",
            "range": "± 76557.00008277285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3643436.84,
            "unit": "ns",
            "range": "± 94996.8445198225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4563207.733333333,
            "unit": "ns",
            "range": "± 81075.45093083415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4635362.111111111,
            "unit": "ns",
            "range": "± 126526.18713723726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7117009.258064516,
            "unit": "ns",
            "range": "± 216144.9863571468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5993966.572916667,
            "unit": "ns",
            "range": "± 32498.198696140436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845386.2057756695,
            "unit": "ns",
            "range": "± 3350.184013746113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362900.35703125,
            "unit": "ns",
            "range": "± 2815.299126297267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581881.021354167,
            "unit": "ns",
            "range": "± 3809.9674959430013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841239.1438151042,
            "unit": "ns",
            "range": "± 2327.8386567304437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746462.8776041666,
            "unit": "ns",
            "range": "± 352.41319825866856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48542.48387096774,
            "unit": "ns",
            "range": "± 2755.261388266422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8443607.894736841,
            "unit": "ns",
            "range": "± 186439.44183982065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21853739.92857143,
            "unit": "ns",
            "range": "± 146729.98481169643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54547220.733333334,
            "unit": "ns",
            "range": "± 416938.47547046805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109447550.13333334,
            "unit": "ns",
            "range": "± 1141385.6454058604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216213040.4,
            "unit": "ns",
            "range": "± 2566547.1558731752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1455596.0543478262,
            "unit": "ns",
            "range": "± 95012.54023795776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2703050.3125,
            "unit": "ns",
            "range": "± 81384.83211755381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312477.9166666665,
            "unit": "ns",
            "range": "± 113295.3939719553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5504344.851851852,
            "unit": "ns",
            "range": "± 149638.90766151377"
          }
        ]
      }
    ]
  }
}