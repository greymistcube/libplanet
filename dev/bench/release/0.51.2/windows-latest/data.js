window.BENCHMARK_DATA = {
  "lastUpdate": 1678872132951,
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
          "id": "d9ac9e43466be30ffab0ca9f7fa20412332985f0",
          "message": "Release 0.51.2",
          "timestamp": "2023-03-15T16:31:49+09:00",
          "tree_id": "c71203d3f8c74634e228142d5310896d1e4e9475",
          "url": "https://github.com/greymistcube/libplanet/commit/d9ac9e43466be30ffab0ca9f7fa20412332985f0"
        },
        "date": 1678866372998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1284849.3827160494,
            "unit": "ns",
            "range": "± 67216.19991389128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2307135.294117647,
            "unit": "ns",
            "range": "± 73344.71075248317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012484,
            "unit": "ns",
            "range": "± 97721.44089610432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4689006.666666667,
            "unit": "ns",
            "range": "± 137494.46868707205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41514.28571428572,
            "unit": "ns",
            "range": "± 2134.843411348346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6948393.333333333,
            "unit": "ns",
            "range": "± 26616.36088323621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17748266.666666668,
            "unit": "ns",
            "range": "± 83964.01156504636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46063293.333333336,
            "unit": "ns",
            "range": "± 286900.16547987727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91813092.85714285,
            "unit": "ns",
            "range": "± 553033.5428890724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 182799513.33333334,
            "unit": "ns",
            "range": "± 1257064.0339791006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4890036.774553572,
            "unit": "ns",
            "range": "± 12102.64081018241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1604284.3900240385,
            "unit": "ns",
            "range": "± 1013.0890987609204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146763.84765625,
            "unit": "ns",
            "range": "± 1273.4314099499697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2541938.4375,
            "unit": "ns",
            "range": "± 6279.770713278951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824322.96875,
            "unit": "ns",
            "range": "± 8732.28006916972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739313.9518229166,
            "unit": "ns",
            "range": "± 597.3150793543605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2947900,
            "unit": "ns",
            "range": "± 43763.43749682447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4624610.52631579,
            "unit": "ns",
            "range": "± 56901.30729543763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21185393.333333332,
            "unit": "ns",
            "range": "± 318396.92089920596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5666594.444444444,
            "unit": "ns",
            "range": "± 118613.26417356743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24333500,
            "unit": "ns",
            "range": "± 250459.66883769073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171644.18604651163,
            "unit": "ns",
            "range": "± 6292.145607462923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170175.75757575757,
            "unit": "ns",
            "range": "± 4658.462078775992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140357.14285714287,
            "unit": "ns",
            "range": "± 2322.7021020666975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10273692.857142856,
            "unit": "ns",
            "range": "± 33866.31442521098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8304040,
            "unit": "ns",
            "range": "± 75468.42102116998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16825.531914893618,
            "unit": "ns",
            "range": "± 1370.8906272470147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47000,
            "unit": "ns",
            "range": "± 4298.273827333112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34236.84210526316,
            "unit": "ns",
            "range": "± 764.6426371666043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84740.86021505376,
            "unit": "ns",
            "range": "± 9935.687067981584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4751.030927835051,
            "unit": "ns",
            "range": "± 686.8549770149243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17860,
            "unit": "ns",
            "range": "± 1633.5837121742036"
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
          "id": "15b601af28513044eddc4ba6bece5e7ed539f952",
          "message": "Release 0.51.2",
          "timestamp": "2023-03-15T17:57:48+09:00",
          "tree_id": "8ea7ba6864a0af3ce8fc71e60b7c98bcdac8f132",
          "url": "https://github.com/greymistcube/libplanet/commit/15b601af28513044eddc4ba6bece5e7ed539f952"
        },
        "date": 1678872100505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619015.7894736843,
            "unit": "ns",
            "range": "± 176047.13544098492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3105528.723404255,
            "unit": "ns",
            "range": "± 308909.85274523695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2615878.350515464,
            "unit": "ns",
            "range": "± 260990.9953055549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6560303.608247423,
            "unit": "ns",
            "range": "± 689305.6053107989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64404.21052631579,
            "unit": "ns",
            "range": "± 14082.62786609025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7762128.723404256,
            "unit": "ns",
            "range": "± 733548.8191158853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24336146.739130434,
            "unit": "ns",
            "range": "± 1980538.5057167185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59951104.166666664,
            "unit": "ns",
            "range": "± 3533507.833626276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101688931.91489361,
            "unit": "ns",
            "range": "± 6009219.926764022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205287403.8961039,
            "unit": "ns",
            "range": "± 10485910.45998644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5278594.110576923,
            "unit": "ns",
            "range": "± 216982.34346242592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1724810.15625,
            "unit": "ns",
            "range": "± 103294.18801888719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1251556.956845238,
            "unit": "ns",
            "range": "± 28256.85716175251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2949313.6067708335,
            "unit": "ns",
            "range": "± 61400.137372657206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986855.6193033854,
            "unit": "ns",
            "range": "± 25187.962101791894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839191.0416666666,
            "unit": "ns",
            "range": "± 14991.092688447256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191964.285714286,
            "unit": "ns",
            "range": "± 389569.72722624906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5073193.939393939,
            "unit": "ns",
            "range": "± 507005.98672514624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26145265.30612245,
            "unit": "ns",
            "range": "± 2650259.031041867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6166308.421052632,
            "unit": "ns",
            "range": "± 755730.8142092347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31590076.288659792,
            "unit": "ns",
            "range": "± 3065076.625359919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204770.65217391305,
            "unit": "ns",
            "range": "± 24324.828079730734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215777.6595744681,
            "unit": "ns",
            "range": "± 32999.68769567216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172893.68421052632,
            "unit": "ns",
            "range": "± 22185.3450312258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11662563.440860216,
            "unit": "ns",
            "range": "± 997976.1183411834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8798475.789473685,
            "unit": "ns",
            "range": "± 749146.1025182292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29888.775510204083,
            "unit": "ns",
            "range": "± 10531.277740915453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69972.04301075269,
            "unit": "ns",
            "range": "± 16345.404656643845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50301.05263157895,
            "unit": "ns",
            "range": "± 11459.60059027756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113974.46808510639,
            "unit": "ns",
            "range": "± 24585.766868448973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5353.529411764706,
            "unit": "ns",
            "range": "± 638.3473936329522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29489.79591836735,
            "unit": "ns",
            "range": "± 10447.013974760883"
          }
        ]
      }
    ]
  }
}