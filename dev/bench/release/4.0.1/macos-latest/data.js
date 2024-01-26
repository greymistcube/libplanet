window.BENCHMARK_DATA = {
  "lastUpdate": 1706254542321,
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
          "id": "0d725d42ce3ab3a084b5628aa13d51a18762c422",
          "message": "Changelog",
          "timestamp": "2024-01-26T16:21:33+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/0d725d42ce3ab3a084b5628aa13d51a18762c422"
        },
        "date": 1706254516735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7852826,
            "unit": "ns",
            "range": "± 202430.60945678022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18474593.785714287,
            "unit": "ns",
            "range": "± 177534.75501051295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46753048.11904762,
            "unit": "ns",
            "range": "± 878110.1539892632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96143100.28947368,
            "unit": "ns",
            "range": "± 2134359.8029731065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191026388.73809522,
            "unit": "ns",
            "range": "± 4121576.983141622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35230.758241758245,
            "unit": "ns",
            "range": "± 3785.594717230803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215560.23913043478,
            "unit": "ns",
            "range": "± 14516.00908120014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207737.80681818182,
            "unit": "ns",
            "range": "± 10773.387984445804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195185.5894736842,
            "unit": "ns",
            "range": "± 18830.89310686075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3857457.1666666665,
            "unit": "ns",
            "range": "± 69011.21374475173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3471234.285714286,
            "unit": "ns",
            "range": "± 59585.19781491756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13226.698924731183,
            "unit": "ns",
            "range": "± 1363.6950027562284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59878,
            "unit": "ns",
            "range": "± 5623.940209841403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52871.63636363636,
            "unit": "ns",
            "range": "± 3638.138870488775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62134.989795918365,
            "unit": "ns",
            "range": "± 12050.831297410883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3280.8186813186812,
            "unit": "ns",
            "range": "± 279.24309915360203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12423.6,
            "unit": "ns",
            "range": "± 1161.422077693201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1262285.4,
            "unit": "ns",
            "range": "± 125698.66763450956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2538112.46,
            "unit": "ns",
            "range": "± 260183.975407357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001782.6210526316,
            "unit": "ns",
            "range": "± 202385.472431714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21169661.70967742,
            "unit": "ns",
            "range": "± 3043242.208873045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2857472.6612903224,
            "unit": "ns",
            "range": "± 86570.30053318778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2972759.625,
            "unit": "ns",
            "range": "± 114975.59809555614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3595497.6578947366,
            "unit": "ns",
            "range": "± 123295.24646637487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3568893.15625,
            "unit": "ns",
            "range": "± 163317.57754621055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22172258.279569894,
            "unit": "ns",
            "range": "± 2572877.690060182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4352657.517400568,
            "unit": "ns",
            "range": "± 103759.90688742121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1340491.7153645833,
            "unit": "ns",
            "range": "± 18852.096352296547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 879786.9948167067,
            "unit": "ns",
            "range": "± 10302.395218696576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972329.4405838817,
            "unit": "ns",
            "range": "± 43623.72202464119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625199.0575195312,
            "unit": "ns",
            "range": "± 13656.058289045608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569724.3988850912,
            "unit": "ns",
            "range": "± 14435.439864262335"
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
          "id": "3b31da77123c4f85fceb80393183ae02cbdd5171",
          "message": "Libplanet 4.0.1",
          "timestamp": "2024-01-26T16:22:06+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/3b31da77123c4f85fceb80393183ae02cbdd5171"
        },
        "date": 1706254525502,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7973784.35,
            "unit": "ns",
            "range": "± 179950.8682921024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19592447,
            "unit": "ns",
            "range": "± 370143.1041543257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47192242.571428575,
            "unit": "ns",
            "range": "± 1122716.190218239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92906275.14285715,
            "unit": "ns",
            "range": "± 917257.9478811044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190323704.2142857,
            "unit": "ns",
            "range": "± 2322246.972609815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34647.42391304348,
            "unit": "ns",
            "range": "± 3398.13965340409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217818.2191011236,
            "unit": "ns",
            "range": "± 12394.029339664803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208834.85897435897,
            "unit": "ns",
            "range": "± 10661.37298360009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195549.914893617,
            "unit": "ns",
            "range": "± 14049.076826257957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3920727.6764705884,
            "unit": "ns",
            "range": "± 76077.41327772266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3506875.3157894737,
            "unit": "ns",
            "range": "± 77488.00112637701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12785.935483870968,
            "unit": "ns",
            "range": "± 1265.163976367006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57471.703296703294,
            "unit": "ns",
            "range": "± 4216.931963971767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53268.89887640449,
            "unit": "ns",
            "range": "± 4347.572065493316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60107.4375,
            "unit": "ns",
            "range": "± 9773.84232241451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3442.010989010989,
            "unit": "ns",
            "range": "± 557.4770248281387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14141.051020408164,
            "unit": "ns",
            "range": "± 2226.6959961399652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045994.2365591398,
            "unit": "ns",
            "range": "± 81458.54807072894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2287858.9104477614,
            "unit": "ns",
            "range": "± 107515.29433241487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1720791.2659574468,
            "unit": "ns",
            "range": "± 127025.58226535803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19177205.57368421,
            "unit": "ns",
            "range": "± 2298280.5703787734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2909067.923076923,
            "unit": "ns",
            "range": "± 99296.86099490403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3019326.125,
            "unit": "ns",
            "range": "± 78300.23596627919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3650028.1627906975,
            "unit": "ns",
            "range": "± 134658.95747404505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3682714.528735632,
            "unit": "ns",
            "range": "± 201375.77158166902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22451373.32631579,
            "unit": "ns",
            "range": "± 3169053.534055668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4552335.228064904,
            "unit": "ns",
            "range": "± 121157.00627258151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1349399.6216517857,
            "unit": "ns",
            "range": "± 10838.495418330185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 897021.6198381697,
            "unit": "ns",
            "range": "± 7843.029390868886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1986438.1848575368,
            "unit": "ns",
            "range": "± 57424.000188026715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634510.1639973958,
            "unit": "ns",
            "range": "± 4818.783320828252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570081.1494140625,
            "unit": "ns",
            "range": "± 5441.922047691481"
          }
        ]
      }
    ]
  }
}